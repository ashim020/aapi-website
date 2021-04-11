function selectHex() {
    var x = document.getElementById("hex");
    if (x.value === "yes") {
      document.getElementById("h").style.visibility = "visible";
    } else {
      document.getElementById("h").style.visibility = "hidden";
    }
  }
  
  function selectCircle() {
    var x = document.getElementById("circle");
    if (x.value === "yes") {
      document.getElementById("c").style.visibility = "visible";
    } else {
      document.getElementById("c").style.visibility = "hidden";
    }
  }