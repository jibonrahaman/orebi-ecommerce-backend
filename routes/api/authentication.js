const express =require("express");
const signup = require("../../controller/signup");
const emailVeryfied = require("../../controller/emailVeryfied");
const login = require("../../controller/Login");
const verifyEmailController = require("../../controller/verifyEmail");

 const authentication =express();
 authentication.post('/signup',signup )
 authentication.post( '/emailVerify', emailVeryfied)
 authentication.post ("/login", login)
 authentication.get ('/emailVerification/:id', verifyEmailController)
  module.exports =authentication;