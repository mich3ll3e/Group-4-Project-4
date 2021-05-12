const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const MembersSchema = new Schema({
  firstName: {
    type: String,
    required: "First name is required",
    trim:true
  },
  lastName: {
    type: String,
    required: "last name is required",
    trim:true
  },
  dateOfBirth: {
    type: Date,
    required: "last name is required",
    trim:false
  },
  photo: {
   type: String,
   required: false

  },
  date: {
    type: Date,
    default:Date.now
  },
  family :
      {
          type:String,
          required:false
      }

  

});
module.exports = User = mongoose.model("members", MembersSchema);