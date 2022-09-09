const mongoose = require("mongoose");

const connectToMOngo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (Err) {
    console.log(`Err ${Err.message}`);
    process.exit();
  }
};

module.exports = connectToMOngo;
