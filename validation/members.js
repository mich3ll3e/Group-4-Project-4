'use strict';

const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateMemberInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.dateOfBirth = !isEmpty(data.dateOfBirth) ? data.dateOfBirth : "";
// First name checks
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name  field is required";
  }
  // Last name checks
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name field is required";
  }
  if (Validator.isEmpty(data.dateOfBirth)) {
    errors.dateOfBirth = "date of birth  field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};