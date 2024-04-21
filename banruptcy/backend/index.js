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

//Processing Functions
class goal {
    constructor(target, contributed, time) {
        this.target = target;
        this.contributed = contributed;
        this.time = time;
    }
}
//May need to recycle logic in database code for better implementation with arrays
function makeContribution (contribution) {
    while (contribution) {
        const nextGoal = new goal(0, 0, 1); //replace with database parsing
        if (contribution >= (nextGoal.target - nextGoal.contributed)) {
            contribution -= nextGoal.target - nextGoal.contributed;
            nextGoal.contributed = nextGoal.target;
            //Use goal data to update database
        }
        else {
            nextGoal.contributed += contribution;
            //Use goal data to update database
            return 0;
        }
    };
    //Retruns money left after completing a contribution
    return contribution;
};

function getContribution() {
    //for each goal in the user's database
    const nextGoal = new goal(0, 0, 1);
    let contributionNeeded = 0;
    contributionNeeded += (nextGoal.target - nextGoal.contributed) / nextGoal.time;
};