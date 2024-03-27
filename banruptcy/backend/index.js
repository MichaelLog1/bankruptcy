const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
const mysql = require('mysql');

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
app.get('/', (req, res) => {
    db.query("INSERT INTO users (username, password) VALUES ('Testing', '123')", (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            console.log(result)
        }
    })
})
app.listen(8080, () => {
    console.log(`Server listening on port 8080`);
})