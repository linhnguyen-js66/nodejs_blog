import mongoose from "mongoose";
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/data_test_dev");
    console.log("success");
  } catch (error) {
    console.log("error", error);
  }
};
export default connect;
