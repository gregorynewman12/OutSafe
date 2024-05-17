const express = require("express");
const mqtt = require("mqtt");

const protocol = 'mqtt';
const host = '172.17.0.2';
const mqtt_port = '1883';

const connectUrl = `${protocol}://${host}:${mqtt_port}`;

const client = mqtt.connect(connectUrl);
const app = express();

const port = process.env.PORT || 8000;

let alertType = "Safe";
let drill = false;
let customAlert = "";

const topic = 'Campus Safety';

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
       client.publish(topic, makeMessage());
       res.status(200).send(makeMessage());
   } else {
       res.status(400).send();
   }
});

app.put('/custom', (req, res, next) => {
    if (req.body.message) {
        customAlert = req.body.message;
        client.publish(topic, makeMessage());
        res.status(200).send(makeMessage());
    } else {
        res.status(400).send();
    }
});

app.listen(port, function () {
    console.log("== Server is listening on port:", port)
});
