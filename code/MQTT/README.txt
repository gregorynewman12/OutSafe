TO INSTALL MOSQUITTO MQTT C++ CLIENT:
https://mosquitto.org/download/

Compile MQTTClient/MQTTServer with the following commands, 
where "client" and "server" will be the names of the executable files.
-lmosquitto makes sure to include the Mosquitto library:

g++ MQTTClient.cpp -o client -lmosquitto
g++ MQTTServer.cpp -o server -lmosquitto
