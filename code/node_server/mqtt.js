const mqtt = require("mqtt");

const protocol = 'mqtt';
const host = 'localhost';
const port = '1883';

const connectUrl = `${protocol}://${host}:${port}`;

const client = mqtt.connect(connectUrl);

const topic = 'Campus Safety';

client.on('connect', () => {
    console.log('Connected');
    client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`);
    });
});

client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString())
});