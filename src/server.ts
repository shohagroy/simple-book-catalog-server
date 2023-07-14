import app from "./app";
import mongoose from "mongoose";
import env from "./configs/envConfig";

const uri: string =
  env.node_environment !== "production"
    ? "mongodb://127.0.0.1:27017/simple_book_store"
    : env.db_uri;

async function dbConnection() {
  try {
    if (uri) {
      await mongoose.connect(uri);
      app.listen(env.port, () => {
        console.log(`server is listening on port: ${env.port}`);
      });
    } else {
      console.log("db uri is not defined");
    }
  } catch (err) {
    console.log(`Failed to connect database ${err}`);
  }
}

dbConnection();
