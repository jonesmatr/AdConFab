const app = require("express")();
const app = express();

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
    res.send("Hello World");
    });

const port = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });