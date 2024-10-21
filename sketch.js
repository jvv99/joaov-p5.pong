function setup() {
    createCanvas(600, 600);
     background("green");
  }
  
  
  function draw() {
    
    stroke ("blue");
    fill ("blue");
   
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
      rect(mouseX, mouseY, 3,3);
    }
  }