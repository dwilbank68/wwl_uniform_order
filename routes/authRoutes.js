const passport = require('passport');

// this is how an external routes file can add routes
// to the original express app object

module.exports = (app) => {
    app.get(
        // 1. when user tries to sign in, this route tells
        // passport to contact google for the first time
        '/auth/google',
        passport.authenticate('google', {scope:['profile','email']})
    )

    app.get(
        // 2. google will respond by calling this route and sending it a user code
        // passport will send code back to google, google will
        // send back accessToken to the 2nd arg of GoogleStrategy
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {res.redirect('/surveys')}
    )

    app.get(
        '/api/logout',
        (req, res) => {
            req.logout();
            res.redirect('/');
        }
        // wipes the cookie
    )

    app.get('/api/current_user', (req,res) => {
        res.send(req.user);
    })
}