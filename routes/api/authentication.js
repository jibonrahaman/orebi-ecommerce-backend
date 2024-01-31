const express =require("express");
const signup = require("../../controller/signup");
const emailVeryfied = require("../../controller/emailVeryfied");
const login = require("../../controller/Login");
 const authentication =express();
 authentication.post('/signup',signup )
 authentication.post( '/emailVerify', emailVeryfied)
 authentication.post ("/login", login)
  module.exports =authentication;