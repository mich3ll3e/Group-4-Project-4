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
    required: true
  },
  date: {
    data: Buffer,
    contentType: String
  },
  relatedFamily :[
      {
          type:mongoose.Schema.type.objectId,
          ref:"users"
      }

  ]

});
module.exports = User = mongoose.model("members", MembersSchema);