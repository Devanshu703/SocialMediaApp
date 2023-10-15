const User =  require('../models/user');

module.exports.signup = function(req, res){
    console.log(req.body);
    User.findOne({email: req.body.email}).then(function(err, user)
    {
        if(err)
            console.log("error signing up user");
        if(!user){
            User.create({
                email: req.body.email,
                password: req.body.password,
                name: req.body.name
            }).then((newUser) => {
                console.log(newUser);
                res.redirect('/');
            });
        }
    }
    );
    
};

module.exports.signin = function(req, res){
    console.log(req.body.email);
    User.findOne({email: req.body.email}).then((user) => {
        console.log(user);
        if(!user)
        {
            console.log("user does not exist");
            res.redirect('back');
        }
        else{
            if(user.password != req.body.password)
            {
                console.log("incorrect Password try again");
                res.redirect('back');
            }
            else{
                res.cookie("user_id", user.id);
                res.redirect('/users/profile');

            }
                
        }

    })
};
module.exports.profile = function(req, res){
    console.log(req.cookies.user_id);
    if(req.cookies.user_id == null)
        return res.redirect('/sign-in')
    User.findById(req.cookies.user_id).then((user) => {
        //
        return res.render("profile", {
            user_id: user
        })
    });
    
}