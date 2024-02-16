Compile MQTTClient/MQTTServer with the following commands.
-lmosquitto makes sure to include the Mosquitto library:

g++ MQTTClient.cpp -o client -lmosquitto
g++ MQTTServer.cpp -o server -lmosquitto