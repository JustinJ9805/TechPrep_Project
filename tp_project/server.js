const express = require("express");
const app = express();
const postgreSQL = require("pg");
const cors = require('cors')

app.use(cors());
app.use(express.json);

const db = postgreSQL.createConnection({
    user:"root",
    host: "localhost",
    password: "",
    database: "TP_Project"

})


// app.listen(3001)

app.post('./SignUp', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const first = req.body.fName;
    const last = req.body.LName;
    const Address = req.body.AddressL1;
    const city = req.body.city;
    const state = req.body.state;
    const email = req.body.email;
    const phone = req.body.phone
})

db.query(
    "INSERT INTO user(username,password,first,last,Address, city, state, email,zip) VALUES (?,?,?,?,?,?,?,?,?)",
    [username,password,first,last,Address,city,state,email,phone],
    (err,result) => {
        if(err){
            console.log(err)
        }
        else {
            res.send("Values Inserted");
        }
    }
)