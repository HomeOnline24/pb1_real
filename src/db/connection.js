import mongoose from "mongoose";
async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URL, {
      writeConcern: { w: "majority" },
    });
    console.log(`Mongodb is connected successfully !! \n HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Db connection failed: ", error);
    process.exit(1);
  }
}
export {connectDB};