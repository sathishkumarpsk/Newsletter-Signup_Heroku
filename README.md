# Newsletter-Signup_Heroku
Newsletter App – Using Mailchimp app

Mailchimp – An email marketing company, we gonna use it for setting up the newsletter.

Setting up the signup page - Highlevel startup steps:

1.	CD to where we want to create our new project eg: Documents
a. cd Documents
2.	Create New Project Folder called Newsletter-Signup
a.	mkdir Newsletter-Signup
3.	Inside Newsletter-Signup, create a new app.js file, a signup.html file, success.html and failure.html files.
a.	touch app.js signup.html success.html failure.html
4.	Initialize npm with default options.
a.	npm init
5.	Install body-parser, express and request npm modules to the new project.
a.	npm install body-parser express request
6.	Open project in Atom.
a.	Atom .
7.	Require the newly installed modules inside app.js
a.	const express = require(“express”);
b.	const bodyParser = require(“body-parser”);
c.	const request = require(“request”);
8.	Create a new express app and set it to listen on port 3000.
a.	const app = express();
9.	Once port is set up, log “server is running on port 3000”.
a.	app.listen(3000, function() {
   console.log(“Server is running on port 3000”);
});
10.	Copy and use bootstrap signin template source code from bootstrap examples. Tweak html and css items as required.
a.	https://getbootstrap.com/docs/5.1/examples/sign-in/

NOTES:
1.	//To get the static file contents - styles.css & images in express
a.	app.use(express.static("public"));
where public is the main folder which has the reference files or folders.
2.	BodyParser get and post routes.
 
Posting Data to Mailchimp’s servers via their API:
Ref: https://mailchimp.com/developer/marketing/guides/quick-start/


Hosting app in Heroku:
Guide: https://devcenter.heroku.com/articles/getting-started-with-nodejs
![image](https://user-images.githubusercontent.com/44191999/181473295-8a73b106-22b8-498a-9ff4-ba138e17edf1.png)

