const express =require("express");
const signup = require("../../controller/signup");
const emailVeryfied = require("../../controller/emailVeryfied");
 const authentication =express();
 authentication.post('/signup',signup )
 authentication.post( '/emailVerify', emailVeryfied)
  module.exports =authentication;