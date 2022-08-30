import express from "express";
import mngs from "mongoose";
import router from "./routers/router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;

// ATTENTION: using 0.0.0.0:27017 instead of localhost:27017. WORKING PROJECT
const DB_URL = "mongodb://0.0.0.0:27017/";  // !!! FUCK: Couldn't set connection with mongo using localhost !
                                            // Found reason - MongoDB didn't start as a service
                                            // See comment 4 at: https://stackoverflow.com/questions/46523321/mongoerror-connect-econnrefused-127-0-0-127017

const application = express();

application.use(express.json());
application.use("/api", router);
application.use(fileUpload({}));

async function runExample() {
    try {
        mngs.connect(
            DB_URL,
            { dbName: 'node_base', useNewUrlParser: true, useUnifiedTopology: true },
            function(error) {
                if (error) throw error;

                console.log("Connection with MONGODB set up !");
            }
        );
        application.listen(
            PORT,
            () => {
                console.log(`Server is listening on PORT:${PORT}`);
            }
        );
    } catch(e) {
        console.log(e);
    }
}

console.log("Run that application using POSTMAN");
runExample();
