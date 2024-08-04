const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*"
}));
const baseUrl = `https://query1.finance.yahoo.com/v8/finance/chart/NVDA`;

app.get("/", async (req, res) => {
    const range = req.query.range || '15m';
    const interval = req.query.interval || '1mo';
    const response = await fetch(`${baseUrl}?interval=${interval}&range=${range}`)
        .then(response => response.json())
        .catch(response => response.json())
    res.json(response);
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})