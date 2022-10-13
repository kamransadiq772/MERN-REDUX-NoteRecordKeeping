const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.URL_MONGO, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(`Connected MONGODB : ${conn.connection.host} `);

  } catch (error) {
    console.error(`Error : ${error}`);
    process.exit()
  }
}
module.exports = connectDB