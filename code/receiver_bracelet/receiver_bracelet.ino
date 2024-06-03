#include "Watchy.h"
#include "Display.h"
#include "WatchyRTC.h"
#include "settings.h"

Watchy watchy(settings);

void setup() {
  watchy.init();
}

void loop() {
  // this should never run, Watchy deep sleeps after init();
}