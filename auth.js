// const passport=require('passport')
// const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
// const GOOGLE_CLIENT_ID='659517788300-5q9mnmukvo22efbltf544a647210e8j0.apps.googleusercontent.com'
// const GOOGLE_CLIENT_SECRET='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'

// passport.use(new GoogleStrategy({
//     clientID:     GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:5000/google/callback",
//     passReqToCallback   : true
//   },
//   function(request, accessToken, refreshToken, profile, done) {
//     // User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return done(err, user);

//   }
// ));


// passport.serializeUser(function(user,done){
//     done(null,user)
// });
// passport.deserializeUser(function(user,done){
//     done(null,user)
// });