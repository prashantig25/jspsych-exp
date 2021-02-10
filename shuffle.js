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