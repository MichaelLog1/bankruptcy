const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());

// example API
app.post("/Signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    // These vars now have the data from the signup form
    console.log(username);
    console.log(password);
    console.log(email);


});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});