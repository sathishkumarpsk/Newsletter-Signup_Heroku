const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

//To get the static file contents - styles.css & images
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

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
  }
  const jsonData = JSON.stringify(data);

  const url = "https://us8.api.mailchimp.com/3.0/lists/6667e21a3a";

  const options = {
    method: "POST",
    auth: "AnyString_Sathish1:6bde02802d8e91e94e60d4ed56227a6b-us8"
  }

  const request = https.request(url, options, function(response) {

    if(response.statusCode === 200) {
      //res.send("Successfully subscribed!");
      res.sendFile(__dirname + "/success.html");
    }
    else {
      //res.send("There was an error with signing up, please try again!");
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function(data){
      console.log(JSON.parse(data));
    })
  })

  request.write(jsonData);
  request.end();

});

app.post("/failure", function(req, res){
  res.redirect("/");
});

/* For Local - 3000
   For Heroku - process.env.PORT  */
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000");
});


// API Key
// 6bde02802d8e91e94e60d4ed56227a6b-us8

// ListId
// 6667e21a3a
