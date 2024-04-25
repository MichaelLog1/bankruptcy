const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;
const app = express();

// define database password and name from .env file
const password = process.env.DATABASE_PASWORD;
const db_name = process.env.DATABASE_NAME

app.use(express.json());
app.use(cors());

// Signup API
// Adds new users to the db
app.post("/Signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    // This is the SQL that runs on the db
    db.query(
        "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
        [username, password, email], 
        (err, results) => {
            console.log(err);
        }
    );
});

// Login API
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

// Goal Setting API
app.post("/Form", (req, res) => {
    const amount = req.body.amount;
    const timeFrameStart = req.body.timeFrameStart;
    const date = req.body.timeFrameEnd;
    const description = req.body.description;

    db.query(
        "INSERT INTO financialdata (amount, timeFrameStart, date, description) VALUES (?, ?, ?, ?)",
        [amount, timeFrameStart, date, description], 
        (err, results) => {
            console.log(err);
        }
    );
});

// Calendar Visuals API
app.get('/financialdata', (req, res) => {
    db.query(
        "SELECT id, date, description FROM financialdata",
        (err, results) => {
            if (err) {
                console.log(err);
            } else {
                res.send(results);
            }
        }
    )
})

// Visuals API
app.get('/data', (req, res) => {
    db.query(
        "SELECT timeFrameStart, date, amount, description FROM financialdata",
        (err, results) => {
            if (err) {
                console.log(err);
            } else {
                res.send(results);
            }
        }
    )
})

// We have to create a connection with SQL
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: DATABASE_PASWORD,
    database: DATABASE_NAME,
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});