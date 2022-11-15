const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// CALC ROUTE
app.post("/api/calc", (req, res) => {
  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const operator = req.body.operator;
  let answer;

  switch (operator) {
    case "+":
      answer = num1 + num2;
      break;

    case "-":
      answer = num1 - num2;
      break;

    case "*":
      answer = num1 * num2;
      break;
  }

  if (num1 !== "" && num2 !== "" && operator !== "") {
    res.status(200).json({ answer: parseFloat(answer.toFixed(2)) });
  } else {
    res.status(500).json("please make sure all fields are filled correctly");
  }
});

const PORT = 8080;

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on ${PORT}`);
});
