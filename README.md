# projectSnitch

## Story

Using a Raspberry Pi and some simple wiring via its GPIO ports, I devised a very crude flooding detector (my home boiler is finicky). The detector is designed to turn on a LED if water accumulates on my kitchen floor and thus closes an electrical circuit.

## How to Use

On a Raspberry Pi:
* Install [Node.js](https://nodejs.org/en/)
* Install [Cylon.js](https://cylonjs.com/documentation/getting-started/)
* Via the Raspberry's GPIO port, attach a LED and a sensor (you can simulate a sensor with a simple button).
* In your terminal:

```
$ git clone https://github.com/sliute/projectSnitch.git
$ cd projectSnitch
$ node startblink.js
```

* Then activate the sensor (or push the button) and see the LED blink.
