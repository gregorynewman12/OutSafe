#include <iostream>
#include <string>

// This is the basic c++ program for displaying the string similar to how it is in the bestalgorithmever.py
int main() {
    std::string string1 = "The quick brown fox jumped over the lazy dog and then it went to the zoo to find a monkey. Hello World! IsThisReallyGoingToWorkDoYouThink?";

    std::string str = string1;


    size_t lastIndex = 0;
    if (str.length() < 18) {
        std::cout << str << std::endl;
        return 0;
    } else {
        std::string substring = str.substr(lastIndex, 18);
        bool moreChars = true;
        while (moreChars) {
            for (int i = static_cast<int>(substring.length()) - 1; i >= 0; --i) {
                if (substring[i] == ' ') {
                    std::cout << substring.substr(0, i) << std::endl;
                    lastIndex += i + 1;
                    if (lastIndex >= str.length()) {
                        moreChars = false;
                        break;
                    }
                    substring = str.substr(lastIndex, 18);
                    break;
                }
                if (i == 0) {
                    std::cout << substring << std::endl;
                    lastIndex += substring.length();
                    if (lastIndex >= str.length()) {
                        moreChars = false;
                        break;
                    }
                    substring = str.substr(lastIndex, 18);
                    break;
                }
            }
        }
    }
    return 0;
}

// This is the function when integrated into our auto callback function that prints text to the watch in our watchy.cpp file
/*
auto callback = [&](char* topic, byte* payload, unsigned int length)
{
    display.fillScreen(GxEPD_BLACK);
    display.setFont(&FreeMonoBold9pt7b);
    display.setCursor(0,18);
    display.print("OutSafe");
    display.setCursor(140, 18);
    if (currentTime.Hour < 10) {
        display.print("0");
    }
    display.print(currentTime.Hour);
    display.print(":");
    if (currentTime.Minute < 10) {
        display.print("0");
    }
    display.println(currentTime.Minute);

    Serial.print(topic);
    Serial.print(": ");

    std::string str((char*)payload, length);
    size_t lastIndex = 0;
    
    display.setFont(&FreeMonoBold9pt7b);
    display.setCursor(0, 80);
    display.print(topic);
    display.print(": ");
    display.setCursor(0, 100);
    
    if (str.length() < 18) {
        for (int i = 0; i < length; i++) {
            display.print((char)payload[i]);
            Serial.print((char)payload[i]);
        }
        display.display(true); // full refresh
        vibMotor();
        return;
    } else {
        std::string substring = str.substr(lastIndex, 18);
        bool moreChars = true;
        int cursorY = 100;
        while (moreChars) {
            for (int i = static_cast<int>(substring.length()) - 1; i >= 0; --i) {
                if (substring[i] == ' ') {
                    display.setCursor(0, cursorY);
                    display.print(substring.substr(0, i).c_str());
                    cursorY += 20;
                    lastIndex += i + 1;
                    if (lastIndex >= str.length()) {
                        moreChars = false;
                        break;
                    }
                    substring = str.substr(lastIndex, 18);
                    break;
                }
                if (i == 0) {
                    display.setCursor(0, cursorY);
                    display.print(substring.c_str());
                    cursorY += 20;
                    lastIndex += substring.length();
                    if (lastIndex >= str.length()) {
                        moreChars = false;
                        break;
                    }
                    substring = str.substr(lastIndex, 18);
                    break;
                }
            }
        }
        display.display(true); // full refresh
        vibMotor();
    }
};

*/
