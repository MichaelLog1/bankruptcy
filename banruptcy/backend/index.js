const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
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
    db.query(
        "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
        [username, password, email], 
        (err, results) => {
            console.log(err);
        }
    );
});

app.post("/Login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE password = ? AND email = ?",
        [password, email], 
        (err, result) => {
            if (err) {
                res.send({err: err});
            }
            if (result) {
                res.send(result);
            } else {
                res.send({ message: "Wrong email/pasword combination!" });
            }
        }
    );
});

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Emily17Kirk$",
    database: "LoginSystem",
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});