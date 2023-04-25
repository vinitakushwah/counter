

var count = document.getElementById('count');
var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');
var reset = document.getElementById('reset');
var number = 0;


increment.disabled = false;
decrement.disabled = true;
reset.disabled = true;

// for counter increment

increment.addEventListener('click', () => {
    number++;
    count.innerHTML = number;
    decrement.disabled = false;
    reset.disabled = false;

});

// for counter decrement

decrement.addEventListener('click', () => {
    number--;
    count.innerHTML = number;
    decrement.disabled = false;
    reset.disabled = false;
    if (number <= 1) {
        number = 0;
        count.innerHTML = number
        decrement.disabled = true;
        reset.disabled = true;
    };

});

// for reset counter

reset.addEventListener('click', () => {
    number = 0;
    count.innerHTML = number;
    increment.disabled = false;
    decrement.disabled = true;
    reset.disabled = true;

});
