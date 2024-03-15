all: MQTTClient.cpp MQTTServer.cpp
	g++ MQTTClient.cpp -o client -lmosquitto
	g++ MQTTServer.cpp -o server -lmosquitto

clean:
	rm -f client
	rm -f server