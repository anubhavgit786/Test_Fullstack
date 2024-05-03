const User = require('../models/user');

module.exports.signup = async (req, res)=>
{
    try 
    {
        const user = await User.create(req.body);    
        console.log(user);
    } 
    catch (error) 
    {
        console.log(error);
    }

}