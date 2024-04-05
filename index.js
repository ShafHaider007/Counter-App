

let number = 0;
const subtractbtn = document.getElementById("subtract");
const addbtn = document.getElementById("add");
const restbtn = document.getElementById("reset");

const countlabel = document.getElementById("label");

let count = 0;

addbtn.onclick = function () {
    count++;
    countlabel.textContent = count;
};


subtractbtn.onclick = function () {
    count--;
    countlabel.textContent = count;
};

/**
 * Reset button event handler
 * Sets count to zero and updates the display
 */
restbtn.onclick = function () {
    /*
     * Set count to zero
     */
    count = 0;

    /*
     * Update the display with the new count
     */
    countlabel.textContent = count;
};
