const express = require("express");
const app = express();
const port = 3000;
const { performance } = require('perf_hooks'); //object destructuring

app.use(express.json());

app.post("/stress", (req, res) => {
  const t1 = performance.now();
  console.log(`Body: ${JSON.stringify(req.body)}`);
  const t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
  res.status(204).send("done");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
