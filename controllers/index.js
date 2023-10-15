module.exports.home = function(req, res){
    return res.render("home", {
        title : "home"
    })
}
module.exports.signup = function(req, res){
    return res.render("sign-up", {
        title : "Sign Up"
    })
}
module.exports.signin = function(req, res){
    return res.render("sign-in", {
        title : "Sign In"
    })
}
module.exports.signout = function(req, res){
    res.clearCookie("user_id");
    return res.redirect("/");
}
