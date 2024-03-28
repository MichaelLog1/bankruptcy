const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

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
    /* username and password are values from the frontend (ex. input buttons)
    that are sent through text that will be executed in MySQL
    this command will add the value to the User table database
    -Josh */
})
app.listen(8080, () => {
    console.log(`Server listening on port 8080`);
})