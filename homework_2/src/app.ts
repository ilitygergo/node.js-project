import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/userRoutes";

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use('/users', userRouter);

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }

  return console.log(`Server is listening on ${port}`);
});
