const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
const db = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : 'Psyces31403&12',
    database : 'bankruptcy'
});

/*
// example API
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
*/

//Database
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send({username: username})
        }
    })
})
app.listen(8080, () => {
    console.log(`Server listening on port 8080`);
})