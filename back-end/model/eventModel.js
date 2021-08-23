

const mongoose = require("mongoose");

const event = new mongoose.Schema({

   userId: {
      type: mongoose.Types.ObjectId 
    },  
  title: {
      type: String,
      required:  true
    },
    image: {
      type: String,
     },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }

});

module.exports = mongoose.model("event",event);