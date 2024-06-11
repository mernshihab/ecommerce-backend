const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  "mongodb+srv://shihab:shihab1404@cluster0.mofnf8k.mongodb.net/weerodigital?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI, {})
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
