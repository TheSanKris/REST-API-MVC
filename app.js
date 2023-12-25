const express = require("express");
const router = require("./routes/indexRout");
const app = express();

const port = 3000;

app.use("/api", router);
app.use(express.json());

app.listen(port, ()=> {
    console.log(`Сервер запущен на: http://localhost:${port}`);
});