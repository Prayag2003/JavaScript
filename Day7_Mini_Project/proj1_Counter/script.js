var counter = document.querySelector(".counter");
var follow = document.querySelector(".followers");

var count = 1;
setInterval(() => {

    if (count <= 1000) {
        counter.innerHTML = count;
        count++;
    }

}, 1)

setTimeout(() => {
    follow.innerHTML = "Followers on LinkedIN";
}, 6500);