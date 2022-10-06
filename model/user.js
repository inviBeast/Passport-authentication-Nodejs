const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: false,
        unique: true //to have unique email
    }
});

UserSchema.plugin(passportLocalMongoose);
//Now I'm not going to specify password and username because what I'm about to do next.
//The User Schema dot plug in passport.

module.exports = mongoose.model('User', UserSchema);

