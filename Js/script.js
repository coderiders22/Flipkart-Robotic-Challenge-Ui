function startObjectDetection() {
    document.getElementById("object-output").innerText = "Detecting objects...";
    setTimeout(() => {
      document.getElementById("object-output").innerText = "Object Detected: Robot Arm";
    }, 2000);
  }
  
  function startFruitDetection() {
    document.getElementById("fruit-output").innerText = "Detecting fruit/vegetable...";
    setTimeout(() => {
      document.getElementById("fruit-output").innerText = "Fruit Detected: Apple";
    }, 2000);
  }
  
