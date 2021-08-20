import * as express from "express";

const app = express.application;

app.get("/test", (request, response) => {
  console.log("Hello world !!!");
});

app.listen(8080, () => console.log("server running in port:8080"));
