**********************************************
TO INSTALL AND RUN MOSQUITTO MQTT C++ CLIENT *
**********************************************

1. Install Mosquitto: https://mosquitto.org/download/

2. Edit the Mosquitto configuration file mosquitto.conf (on Linux, located at /etc/mosquitto/mosquitto.conf)
to contain the following:

----------------------------------------------------------
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

----------------------------------------------------------

3. Restart/start the Mosquitto service or make sure it is running. On Linux (Systemd-based):
"sudo systemctl [re]start mosquitto". A restart is necessary after editing the configuration file.


************************************************************
TESTING MOSQUITTO FUNCTIONALITY                            *
************************************************************

You can use these commands to test Mosquitto functionality outside of a C++ program. 
This requires you have the mosquitto-clients package installed.

Publisher: mosquitto_pub -t test -m "Hello!"
Subscriber: mosquitto_sub -h publisher-ip-address-here -v -t "test"

(@publisher-ip-address-here should be the ip of the publisher's device)

It is best to first try this in two terminal windows on the same device with localhost as the ip,
and then attempt it over the network between two devices.


************************************************************
COMPILING MQTTClient.cpp and MQTTServer.cpp                *
************************************************************

Use the following commands to compile the files:

g++ MQTTClient.cpp -o client -lmosquitto
g++ MQTTServer.cpp -o server -lmosquitto
(-lmosquitto makes sure to include the Mosquitto library)

