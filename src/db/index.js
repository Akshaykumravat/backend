import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
    try {
        const conectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(
            `Database is conected !! DB HOST is ${conectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("error while connecting database ", error);
        process.exit(1);
    }
};
