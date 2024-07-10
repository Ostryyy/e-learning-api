const express = require("express");
const router = express.Router();
const {
  register,
  login,
  forgotPassword,
  resetPassword,
  activateAccount,
  resendActivationEmail,
} = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/activate/:token", activateAccount);
router.post("/resend-activation-email", resendActivationEmail);

module.exports = router;
