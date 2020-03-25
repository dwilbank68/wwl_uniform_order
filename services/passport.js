const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');
// if 'users' had been exported then imported here using require,
// mongoose would error during testing because multiple models
// with the same name would be loaded 

const strategyObj = {
    proxy: true,
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
};

const OAuthCallback = async (accessToken, refreshToken, profile, done) => {
    // this is called by passport when google sends back the
    // final token(s) and user profile
    const {id, displayName, emails, photos} = profile;
    const existingUser = await User.findOne({googleId: id});
    if (existingUser) return done(null, existingUser);
        // serializeUser called with existingUser
    const user = await new User({
        googleId:id,
        name:displayName,
        email:emails[0].value,
        photo:photos[0].value
    }).save()
    done(null, user);
        // serializeUser called with user
}

passport.serializeUser((user, done) => {
    // called from OAuthCallback
    // user.id is shortcut for user._id.$oid
    done(null, user.id);
    // puts user info into cookie
})

passport.deserializeUser((id, done) => {
    // gets user info from cookie so
    // it can be attached as req.user
    User
        .findById(id)
        .then(user => {
            done(null, user)
        })
    
})

passport.use(new GoogleStrategy(strategyObj, OAuthCallback));