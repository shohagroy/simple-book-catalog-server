"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const envConfig_1 = __importDefault(require("./configs/envConfig"));
const uri = envConfig_1.default.node_environment !== "production"
    ? "mongodb://127.0.0.1:27017/simple_book_store"
    : envConfig_1.default.db_uri;
function dbConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (uri) {
                yield mongoose_1.default.connect(uri);
                app_1.default.listen(envConfig_1.default.port, () => {
                    console.log(`server is listening on port: ${envConfig_1.default.port}`);
                });
            }
            else {
                console.log("db uri is not defined");
            }
        }
        catch (err) {
            console.log(`Failed to connect database ${err}`);
        }
    });
}
dbConnection();
