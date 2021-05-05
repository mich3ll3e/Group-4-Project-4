const express = require("express");
const router = express.Router();
// Load input validation
const validateMemberInput = require("../../validation/members");
// Load User model
const User = require("../../models/users");