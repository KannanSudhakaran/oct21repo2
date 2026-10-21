// server.js - Simple Express API with a 5-second delay
const express = require("express");
const app = express();
const PORT = 3000;

// Allow the HTML page to call this API even if opened from file:// or another port
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

const customers = [
  { id: 1, name: "Kannan", city: "Mumbai" },
  { id: 2, name: "Ali", city: "Dammam" },
  { id: 3, name: "Priya Nair", city: "Kochi" },
  { id: 4, name: "John Smith", city: "London" },
  { id: 5, name: "Fatima Khan", city: "Dubai" }
];


app.get("/api/customers", (req, res) => {
  console.log("Request received - responding in 5 seconds...");
  setTimeout(() => {
    res.json(customers);
    console.log("Customers sent.");
  }, 5000);
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}/api/customers`);
});