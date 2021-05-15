const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const app = express();
const passport = require("passport");
const morgan = require('morgan');
const users = require("./routes/api/users");
const todo = require("./routes/api/todo");
const members =require("./routes/api/members");
const { connected } = require("process");


app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/familyapp",{
  useNewUrleParser: true,
useFindAndModify: false
})
// const db = `${MONGODB_URI}/${MONGO_DB_NAME}`;
// mongoose.connect({
//   useNewUrlParser:true,
//   useCreateIndex:true,
//   useUnifiedTopology:true.then(()=>console.log('MongoDB connected!'))
// .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport");

// Routes
app.use("/api/users", users);
app.use("/api/todo",todo);
app.use("/api/members",members);

// Serve static asset in production
if(process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*',(req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  });

}
// Send every request to the React app
// Define any API routes before this runs


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
