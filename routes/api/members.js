const express = require("express");
const router = express.Router();
// Load input validation
const validateMemberInput = require("../../validation/members");
// Load User model
const Member = require("../../models/members");

router.post("/members", async (req, res) => {
    // Form validation
  const { errors, isValid } = validateMemberInput(req.body);
  // Check validation
   if (!isValid) {
     return res.status(400).json(errors);
    }
        const newMember = new Member({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          dateOfBirth: req.body.dateOfBirth,
          family: req.body.family,
        });
        const saveMember=await newMember.save();
        res.json(saveMember);
  });
  module.exports = router;