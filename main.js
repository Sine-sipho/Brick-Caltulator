let wallWidth = document.getElementById("width");
let wallHeight = document.getElementById("height");
let doorSize = document.getElementById("door-size").value

//declaring drop-down menu variables
let mblock = document.getElementById("block");
let stockBrick = document.getElementById("stock");
//convert input values into integers
function calculateArea(type, doorSize){
   let blockWidth = 0.390;
   let blockHeight = 0.190;
   let brickWidth = 0.222;
   let brickheight = 0.106;
   let widthValue = parseFloat(wallWidth.value);
   let heightValue = parseFloat(wallHeight.value);

   if (type === "M6 block"){
   return Math.round((widthValue / blockWidth * heightValue / blockHeight))
   }
   else if (type === "stock-brick"){
   return Math.round((widthValue / brickWidth * heightValue / brickheight))
   }
   else if(doorSize > 0){
      widthValue + heightValue - doorValue
   }
      return "Enter a valid input."
   }

//add eventListener for when option of the drop-down menu changes
let selected = document.getElementById("type");
//caltulate
selected.addEventListener("change", function(){
   let val = document.getElementById("type").value;
   let btn = document.getElementById("button");
   btn.addEventListener("click", function(){
      let total = document.getElementById("total");
      total.innerHTML = calculateArea(val)
   })
})
//create function 
 