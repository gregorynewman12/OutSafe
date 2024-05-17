# Use an official Node.js image as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the custom server files
COPY . .

# Install the dependencies for the custom server
RUN npm install

# Install Mosquitto
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    mosquitto \
    mosquitto-clients && \
    rm -rf /var/lib/apt/lists/*

# Copy the Mosquitto configuration file
COPY mosquitto.conf /etc/mosquitto/mosquitto.conf

# Expose the ports for Node.js and Mosquitto
EXPOSE 1883 8000

# Start Mosquitto in the background and then the custom server
CMD mosquitto -c /etc/mosquitto/mosquitto.conf & node server.js