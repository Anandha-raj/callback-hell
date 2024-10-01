let count = 10;

const decrement = (callback) => {
    if (count > 0) {
        document.getElementById('counter').innerHTML=count;
        count -= 1;
        setTimeout(() => {
            callback(callback);
        }, 1000);
    } else {
        document.getElementById('counter').innerHTML="Happy Independence Day";
    }
}

decrement(decrement);
