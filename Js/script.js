function startObjectDetection() {
    document.getElementById("object-output").innerText = "Detecting objects...";
    // Simulate object detection after 2 seconds
    setTimeout(() => {
      document.getElementById("object-output").innerText = "Object Detected: Robot Arm";
    }, 2000);
  }
  
  function startFruitDetection() {
    document.getElementById("fruit-output").innerText = "Detecting fruit/vegetable...";
    // Simulate fruit detection after 2 seconds
    setTimeout(() => {
      document.getElementById("fruit-output").innerText = "Fruit Detected: Apple";
    }, 2000);
  }
  