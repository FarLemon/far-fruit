const particlesConfig = {
  "fullScreen": {
    "enable": false,
    "zIndex": -1
  },
  "fpsLimit": 24,
  "particles": {
    "color": {
      "value": "#5fb372"
    },
    "move": {
      "enable": true
    },
    "opacity": {
      "value": {
        "min": 0,
        "max": 0.1
      }
    },
    "size": {
      "value": 250,
      "random": {
        "enable": true,
        "minimumValue": 50
      },
    },
    "number": {
      "density": {
        "enable": true,
        "value_area": 500
      },
      "value": 5
    }
  }
};

export default particlesConfig;