//A
function RandomRed(){
  var red = Math.round(Math.random()*255)
  return "rgb("+red+", 100,100)";
}

setInterval(()=>{
	app.style.bakgroundColor = "rgb(255,222,255)";
}, 500);
