const express = require("express");
const cors = require("cors");
const path = require("path");

const user = require("./routes/userRoute");
const event = require("./routes/eventRoute");

const app = express();

require("./config /db")();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));

app.use("/user", user);
app.use("/event", event);

const port = 3002;

app.listen(port, () => {
    console.log(`Server yekhdem ${port}`);
});
