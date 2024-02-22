TO INSTALL MOSQUITTO MQTT C++ CLIENT:
https://mosquitto.org/download/

Compile MQTTClient/MQTTServer with the following commands, 
where "client" and "server" will be the names of the executable files.
-lmosquitto makes sure to include the Mosquitto library:

g++ MQTTClient.cpp -o client -lmosquitto
g++ MQTTServer.cpp -o server -lmosquitto

You can use these commands to test Mosquitto functionality outside of a C++ program. 
This requires you have the mosquitto-clients package installed:

Publisher: mosquitto_pub -t test -m "Hello!"
Subscriber: mosquitto_sub -h publisher-ip-address-here -v -t "test"

*** POTENTIAL ISSUES

You may need to modify your configuration file to make sure that incoming connections will be accepted.
Mine is located at /etc/mosquitto/mosquitto.conf and currently looks like:

# Place your local configuration in /etc/mosquitto/conf.d/
#
# A full description of the configuration file is at
# /usr/share/doc/mosquitto/examples/mosquitto.conf.example

pid_file /run/mosquitto/mosquitto.pid

persistence true
persistence_location /var/lib/mosquitto/

log_dest file /var/log/mosquitto/mosquitto.log

include_dir /etc/mosquitto/conf.d

# This configures the broker to listen on port 1883 on all network interfaces
listener 1883 0.0.0.0

# This allows connection without authentication credentials
allow_anonymous true
