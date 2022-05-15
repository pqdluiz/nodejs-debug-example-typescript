import express, { Request, Response } from "express";

const port = 5000;
const app = express();

app.use(express.json());

app.get("/", (request: Request, response: Response) => {
  return response.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server runnning to port http://localhost:5000`);
});
