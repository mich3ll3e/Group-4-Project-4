// const Validator = require("validator");
// const isEmpty = require("is-empty");
// module.exports = function validateTodoInput(data) {
//   let errors = {};
// // Convert empty fields to an empty string so we can use validator functions
//   data.title = !isEmpty(data.title) ? data.title : "";
//   data.responsible = !isEmpty(data.responsible) ? data.responsible : "";
// // responsible checks
//   if (Validator.isEmpty(data.title)) {
//     errors.firstName = "Description field is required";
//   }
//   // responsible checks
//   if (Validator.isEmpty(data.responsible)) {
//     errors.lastName = "Responsible is required";
//   }
// return {
//     errors,
//     isValid: isEmpty(errors)
//   };
// };