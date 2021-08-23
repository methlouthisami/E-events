 
const mongoose = require('mongoose')
const db_connection = () =>{
    mongoose
      .connect(
        "mongodb+srv://e-events:events123@cluster0.jmisd.mongodb.net/e-events?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: true,
        }
      )
      .then(() => {
        console.log("data_base connected");
      })
      .catch(() => {
        console.log("error bch tetarcheg");
      });

} 
module.exports = db_connection