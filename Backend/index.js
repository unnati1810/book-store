import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import cors from "cors";
import userRoute from "./route/user.route.js"

const app = express()


app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDbURI;

//connect to mongoDb
try{

  mongoose.connect(URI,{
    useNewUrlParser:true,
    useunifiedTopology:true
  });

  console.log("Connected to mongoDb")
}catch(error){
  console.log("Error", error);
}

//Defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})