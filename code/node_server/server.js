const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

let alertType = "Safe";
let drill = false;
let customAlert = "";

const makeMessage = () => {
    return alertType.replace(/([A-Z])/g, ' $1').trim() + (drill ? " Drill" : "") + (customAlert ? " " + customAlert : "");
}

const validAlert = (s) => (s === "Safe" || s === "ShelterInPlace" || s === "Exit");

app.use(express.json());

app.get('/', (req, res, next) => {
    res.status(200).send(makeMessage());
});

app.put('/', (req, res, next) => {
   if (req.body.alertType && validAlert(req.body.alertType)) {
       alertType = req.body.alertType;
       drill = !!req.body.drill;
       res.status(200).send(makeMessage());
   } else {
       res.status(400).send();
   }
});

app.put('/custom', (req, res, next) => {
    if (req.body.message) {
        customAlert = req.body.message;
        res.status(200).send(makeMessage());
    } else {
        res.status(400).send();
    }
});

app.listen(port, function () {
    console.log("== Server is listening on port:", port)
});