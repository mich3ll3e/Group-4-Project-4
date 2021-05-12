const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const MembersSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
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