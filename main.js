document.getElementById("button").addEventListener("click", function () {
  let wallWidthvalue = parseFloat(document.querySelector("#width").value);
  let wallengthvalue = parseFloat(document.querySelector("#height").value);
  let doorValue = parseFloat(document.querySelector("#door").value);
  let windowValue = parseFloat(document.querySelector("#window").value);

  let wallArea = wallWidthvalue * wallengthvalue;
  let openings = doorValue + windowValue;
  let netWallarea = wallArea - openings;

  function caltulateBricks(brick_type) {
    if (brick_type === "M6 block") {
      let total = document.getElementById("total");
      total.innerHTML = netWallarea / 0.0741;
    } else {
      total.innerHTML = netWallarea / 0.0328;
    }
  }
  caltulateBricks(document.querySelector("#type").value);
});
//console.log(netWallarea);
//   console.log(wallWidthvalue, wallengthvalue, doorValue, windowValue);
//   console.log(wallArea);
//   console.log(openings);

// let blockWidth = 0.39;
// let blockHeight = 0.19;
// let brickWidth = 0.222;
// let brickheight = 0.106;
