import User from "..models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getJoin = (req, res) => res.render("Join");
export const postJoin = async (req, res) => {
    const {username, email, password, password2} = req.body;
    if (password !== password2) {
        return res.status(400).render("join", {errorMessage: "Passwords do not match."});
    }
    try {
        const user = await User.create({
            username, 
            email, 
            password,
        });
        req.session.user = user;
        return res.redirect("/");
    }   catch (error) {
        return res.status(400).render("join", {errorMessage: error._message});
    }
};

export const getLogin = (req, res) => res.render("login");
export const postLogin = async (req,res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) {
        return res.status(400).render("login", {errorMessage: "An account with this email does not exist"});
    }
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
        return res.status(400).render("login", {errorMessage: "Wrong password."});
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
};

export const editProfile = (req, res) => res.send("Edit Profile");
export const changePassword = (req, res) => res.send("Change Password");
export const userDetail = (req, res) => res.send("User Detail");