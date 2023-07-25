const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery',false);
// mongoose.connect('mongodb://localhost/IssueTracker')
// .then(
// () => {console.log("Database connected successfully")},
// (err) => {console.log("error occuring while database connecting",err)}
// );


mongoose.connect('mongodb+srv://tyagichanchal407:Shahenshah@cluster0.vmyxmud.mongodb.net/Issue_tracker?retryWrites=true&w=majority')
.then(
() => {console.log("Database connected successfully")},
(err) => {console.log("error occuring while database connecting",err)}
);

module.exports = mongoose;