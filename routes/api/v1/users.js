const express = require("express");
const router = express.Router();
const passport = require("passport");

const usersController = require("../../../controllers/api/v1/users_controller");

// get captcha object.
const Recaptcha = require('express-recaptcha').RecaptchaV2;

//import Recaptcha from 'express-recaptcha'
const API_KEY = '6LdeZeoUAAAAALcxL-TeiBP1uo78d906c8PAD0JO';
const SECRET_KEY = '6LdeZeoUAAAAAKbVOJYEyrRsHW6yJLJYdm480Dbi';

// create captcha object.
var recaptcha = new Recaptcha(API_KEY, SECRET_KEY, { callback: 'cb' });

router.get("/profile", passport.checkAuthentication, usersController.profile);

router.get("/sign-up", recaptcha.middleware.render, usersController.signUp);
router.get("/sign-in", recaptcha.middleware.render, usersController.signIn);

router.post("/create", recaptcha.middleware.verify, usersController.create);

// use passport as a middleware to authenticate
router.post(
  "/create-session",
  passport.authenticate("local", {
    failureRedirect: "/users/sign-in",
    failureFlash: true
  }),
  recaptcha.middleware.verify,
  usersController.createSession
);

router.get("/sign-out", usersController.destroySession);

router.get("/reset-password", usersController.resetPass);

router.post('/update', usersController.update);

router.get('/forgot', usersController.forgot);

router.post('/forgot-password', usersController.forgotPassword);

module.exports = router;
