"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    raspi: { adaptor: "raspi" }
  },

  devices: {
    led: { driver: "led", pin: 11 },
    button: { driver: "button", pin: 7 }
  },

  work: function(my) {
    my.button.on("push", function() {
      every((1).second(), my.led.toggle);
    });
    // my.button.on("release", my.led.turnOff);
  }
}).start();