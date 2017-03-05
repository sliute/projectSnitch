"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    raspi: { adaptor: "raspi" }
  },

  devices: {
    button: { driver: "button", pin: 7 }
  },

  work: function(my) {
    my.button.on("push", function() {
      console.log("Button pushed!");
    });
  }
}).start();