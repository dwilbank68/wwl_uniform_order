const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

require('./models/Survey.js');
require('./models/User.js');
require('./services/passport.js');
const keys = require('./config/keys.js')

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(
    cookieSession({
        // puts info from cookie onto req.session...
        // If you want to store more than 4K, use
        // expressSession instead - it stores session data
        // on an external store
        maxAge:30*24*60*60*1000, // 30 days
        keys:[keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

// send the express app object to the authRoutes file
require('./routes/authRoutes.js')(app);
require('./routes/billingRoutes.js')(app);
require('./routes/surveyRoutes.js')(app);

if (process.env.NODE_ENV === 'production') {
    // if req comes in without recognizable route,
    // like for a js file...
    app.use(express.static('client/build'));
    // then if req doesn't match anything in client/build
    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    // any asset in public gets delivered (bundle.js, styles.css)
    // but for any other route, send back index.html
    // res.sendFile(path.join(publicPath, 'index.html'));
    res.send({hi:'there'});
})

app.listen(PORT, function(){
    console.log('Express listening on port ', PORT);
});