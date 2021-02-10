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