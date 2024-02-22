HOW TO INSTALL AND CONFIGURE ARDUINO IDE

1. Install Arduino IDE from https://www.arduino.cc/en/software
2. Start Arduino and open File > Preferences
3. Under Additional Board Manager URLs add:
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
4. Open Tools > Board > Boards Manager and install the latest version of esp32 platform (install both "Arduino ESP32 Boards" and "esp32")
5. Under Sketch > Include Library > Manage Libraries, search for Watchy and install the latest version. This should install all dependencies as well, but if not,

