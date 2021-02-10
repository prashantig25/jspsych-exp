function randbet(min, max) { //randbet generates a randomly number between the min and max number. // min and max are the upper and lower bound.
    return Math.random() * (max - min) + min;
}