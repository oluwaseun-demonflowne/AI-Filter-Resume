import express, {
  type Request,
  type Response,
  type NextFunction
} from "express";

const app = express();
const port = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).send(`Internal Server Error\n${err.stack}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
