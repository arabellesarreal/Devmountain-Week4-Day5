const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortunes, getFortune, createFortune, deleteFortune, updateFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortunes);
app.get("/api/fortunes", getFortune);
app.post("/api/fortune", createFortune);
app.delete("/api/fortune/:id", deleteFortune);
app.put("/api/fortune/:id", updateFortune);

app.listen(4000, () => console.log("Server running on 4000"));
