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

function gabor(c) { //generates 2 gabors left and right to the fixation
    var context = c.getContext("2d");
    const my_gradient = context.createLinearGradient(0,0,200,0); const my_gradient1 = context.createLinearGradient(225,0,425,0); //two gradients for two gabors
    const bands = 10; const colors = ["#000", "#FFF"];
    const stops = bands * colors.length; //number of layers that you want to color in the patch
    var pos = 0; var pos1 = 0;
    while (pos <= stops) { //colors each band of the patch with white and black.
        my_gradient1.addColorStop(pos / stops, colors[pos % colors.length]);
        pos++;
    }
    while (pos1 <= stops) {
        my_gradient.addColorStop(pos1 / stops, colors[pos1 % colors.length]);
        pos1++;
    }
    context.fillStyle = my_gradient; //gradients for left and right Gabor
    context.filter = 'contrast('+ jsPsych.currentTrial().contrast +')' //contrast level randomly generated after every trial
    context.fillRect(100,200,100,100);
    context.fillStyle = my_gradient1;
    context.filter = 'contrast('+ jsPsych.currentTrial().contrast1 +')'
    context.fillRect(325,200,100,100);
    context.stroke()
    context.moveTo(240, 250); context.lineTo(280, 250); //horizontal line
    context.moveTo(260, 230); context.lineTo(260, 270); //vertical line
    context.filter = 'contrast(1)'; context.lineWidth = 3;
    context.stroke();
}

function randbet(min, max) { //randbet generates a randomly number between the min and max number. // min and max are the upper and lower bound.
    return Math.random() * (max - min) + min;
};

function shuffle(array) {
    var ctr = array.length, temp, index; // While there are elements in the array
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr); // Pick a random index
        ctr--; // Decrease ctr by 1
        temp = array[ctr]; // And swap the last element with it
        array[ctr] = array[index];
        array[index] = temp;
    }
    return array;
};