import express from "express"

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json())


// routes
app.get("/", (req, res) => {
    res.send("Hello from the entry point of the API")
    console.log("This is the main route/entry route");
});

// listen to the server
app.listen(port, () => {
    console.log(`Backend server running on port ${port}`)
});