import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const envConfig = {
  node_environment: process.env.NODE_ENV,
  db_uri: process.env.DB_URI,
  port: 5000,
};

export default envConfig;
