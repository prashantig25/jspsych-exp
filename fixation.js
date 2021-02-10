
function fixation(c) { //generates fixation by drawing on HTML canvas.
    var context = c.getContext("2d"); //Name of the canvas
    context.moveTo(240, 250); //start of horizontal line
    context.lineTo(280, 250); //end of horizontal line
    context.moveTo(260, 230); //start of vertical line
    context.lineTo(260, 270); //end of vertical line
    context.filter = 'contrast(1)'; //keeps the contrast constant
    context.lineWidth = 3;
    context.stroke();
};