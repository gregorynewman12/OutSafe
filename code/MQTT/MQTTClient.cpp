#include <iostream>
#include "mosquitto.h"
#include <string.h>

int main()
{
    mosquitto_lib_init();

    mosquitto *mqtt_client = mosquitto_new(NULL, true, NULL);
    if (!mqtt_client)
    {
        std::cerr << "Failed to initialize Mosquitto library." << std::endl;
        return 1;
    }

    // IP Address in mosquitto_connect is wherever the broker is, NOT the address of the subscriber!
    // The broker is running on the same machine as the one running the client program, so localhost is used.
    int rc = mosquitto_connect(mqtt_client, "192.168.0.101", 1883, 60);
    if (rc != MOSQ_ERR_SUCCESS)
    {
        std::cerr << "Failed to connect to broker: " << mosquitto_strerror(rc) << std::endl;
        mosquitto_destroy(mqtt_client);
        mosquitto_lib_cleanup();
        return 1;
    }

    const char *topic = "Campus Safety";
    const char *message = "Evacuate immediately";
    rc = mosquitto_publish(mqtt_client, NULL, topic, strlen(message), message, 0, false);
    if (rc != MOSQ_ERR_SUCCESS)
    {
        std::cerr << "Failed to publish message: " << mosquitto_strerror(rc) << std::endl;
    }

    mosquitto_disconnect(mqtt_client);
    mosquitto_destroy(mqtt_client);
    mosquitto_lib_cleanup();

    return 0;
}
