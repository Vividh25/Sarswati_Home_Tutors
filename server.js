var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var cors = require("cors");
var creds = require("./config");

var transport = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS,
    },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take messages");
    }
});

router.post("/send", (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var content = `Name: ${name} \n Email: ${email}`;

    var mail = {
        from: name,
        to: "bhardwajvividh@gmail.com",
        subject: "New Registration",
        text: content,
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: "fail",
            });
        } else {
            res.json({
                status: "success",
            });
        }
    });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3002);