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
  auto callback = [](char* topic, byte* payload, unsigned int length)
  {
      Serial.print(topic);
      Serial.print(": ");

      String strPayload = "";
      for (int i = 0; i < length; i++) {
          strPayload += (char)payload[i];
      }

      size_t lastIndex = 0;
      while (lastIndex < strPayload.length()) {
          String substring = strPayload.substring(lastIndex, min(lastIndex + 18, strPayload.length()));

          int lastSpaceIndex = substring.lastIndexOf(' ');

          if (lastSpaceIndex == -1 || lastSpaceIndex == substring.length() - 1) {
              Serial.println(substring);
              display.fillScreen(GxEPD_BLACK);
              display.setCursor(60, 80);
              display.println(substring);
              display.display(false);
              lastIndex += substring.length();
          } else {
              Serial.println(substring.substring(0, lastSpaceIndex));
              display.fillScreen(GxEPD_BLACK);
              display.setCursor(60, 80);
              display.println(substring.substring(0, lastSpaceIndex));
              display.display(false); 
              lastIndex += lastSpaceIndex + 1;
          }
      }
  };

*/