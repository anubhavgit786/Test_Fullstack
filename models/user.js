const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema(
{
    name:
    { 
        type:String, 
        required:[true, 'A user must have a name'],
    },
    email:
    {
        type:String, 
        required:[true, 'A user must have an email'], 
        lowercase:true,
        validate:[validator.isEmail, 'Please provide a valid email'], 
    },
    role:
    {
        type:String,
        enum:['user', 'admin'],

        default: 'user'
    }, 
}, 
{
    timestamps: true
});


const User = mongoose.model('User', userSchema);


module.exports = User;