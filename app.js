const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const serverless = require("serverless-http");
const request = require("request");
const env = require("dotenv").config();


const app = express();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    console.log(process.env);
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.emailAddress;
    console.log(firstName, lastName, email);

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };



    const jsonData = JSON.stringify(data);

    const url = "https://us13.api.mailchimp.com/3.0/lists/ffcb84c516";

    const options = {
        method: "POST",
        auth: "julius1:" + process.env.MAILCHIMP_KEY
    }

    const request = https.request(url, options, (response) => {

        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", (data) => {
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();

    // console.log(res.statusCode);
});

app.post("/failure", (req, res) => {
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
})

// list id
// ffcb84c516

// API Keys
// 60736d71af27e137ed6c1657f3efd571-us13