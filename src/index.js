import "dotenv/config";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

app.get("/", (req, res) => {
    res.send("hello every one");
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running at port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log("error in mongoDB !! ", error);
    });
