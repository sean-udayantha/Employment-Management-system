import {} from "dotenv/config";
import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";

const { connect } = mongoose;

// Connect MongoDB.
mongoose.set("strictQuery", false);
const URI = process.env.MONGODB_URL;
connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
); 

// mongoose.set("strictQuery", false);
// mongoose.connect(
//   "mongodb://localhost:27017/",
//   {
//     dbName: "employee",
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) =>
//     err ? console.log(err) : console.log(
//       "Connected to employee database")
// ); 


const app = express();
app.use(json());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", 1);
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  `Server running on port ${port} 🔥`;
  console.log(`Server running on port ${port} 🔥`);
});

//route imports



//Doctor route
import userRoute from "./routes/user.js";
//patient route
import patientRoute from "./routes/patient.js";

import employeeRoute from "./routes/employee.js";

//routes


//Doctor routes
app.use(userRoute);
//patient routes
app.use(patientRoute);

app.use(employeeRoute);

  