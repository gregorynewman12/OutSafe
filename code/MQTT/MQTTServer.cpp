#include <iostream>
#include "mosquitto.h"

void message_callback(struct mosquitto *mqtt_client, void *userdata, const struct mosquitto_message *message)
{
    if (message)
    {
        std::cout << message->topic << ": " << (char *)message->payload << std::endl;
    }
}

int main()

{
    mosquitto_lib_init();

    mosquitto *mqtt_client = mosquitto_new(NULL, true, NULL);
    if (!mqtt_client)
    {
        std::cerr << "Failed to initialize Mosquitto library." << std::endl;
        return 1;
    }

    mosquitto_message_callback_set(mqtt_client, message_callback);

    int rc = mosquitto_connect(mqtt_client, "10.0.0.26", 1883, 60);
    if (rc != MOSQ_ERR_SUCCESS)
    {
        std::cerr << "Failed to connect to broker: " << mosquitto_strerror(rc) << std::endl;
        mosquitto_destroy(mqtt_client);
        mosquitto_lib_cleanup();
        return 1;
    }

    const char *topic = "Campus Safety";
    mosquitto_subscribe(mqtt_client, NULL, topic, 0);

    mosquitto_loop_forever(mqtt_client, -1, 1);

    mosquitto_disconnect(mqtt_client);
    mosquitto_destroy(mqtt_client);
    mosquitto_lib_cleanup();

    return 0;
}