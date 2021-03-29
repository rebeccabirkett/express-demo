const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`Hello, your name is ${req.query}`);
})

app.get("/data", (req, res) => {
    res.send({ name: "Bex", age: 29});
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send({
        message: `You entered your info under the name ${req.body.name}`,
    });
});

// app.get("/person", (req, res) => {
//     res.send({ message: "Showing all people:" });
// });

// app.get("/person/:id", (req, res) => {
//     console.log(req.params.id);

//     res.send({ message: "Success" });
// });


app.listen(5000, () => {
    console.log("listening on port 5000");
});