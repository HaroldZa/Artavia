
var back = document.getElementById("back");
var go = document.getElementById("go");

var it1 = document.getElementById("it1");
var it2 = document.getElementById("it2");
var it3 = document.getElementById("it3");

var array = [];

const fill = () => {
    array = [];
    for (let i = 0; i < it1.classList.length; i++) {
        array.push(it1.classList[i]);
    }
}

fill();

var startingX, startingY;
function touchStart(evt) {
    startingX = evt.touches[0].clientX;
}
function touchMove(evt) {
    movingX = evt.touches[0].clientX;
}
function touchEnd() {
    
    if (startingX + 100 < movingX) {
        document.getElementById('back').click();
    } else if (startingX - 100 > movingX) {
        document.getElementById('go').click();
    }
}

back.addEventListener("click", function () {
    if(array.indexOf('second') > 0){
        it1.classList.add('first');
        it2.classList.add('first');
        it3.classList.add('first');
        document.getElementById('back').style.display = 'none';

        it1.classList.remove('second');
        it2.classList.remove('second');
        it3.classList.remove('second');

        fill();
    }else if(array.indexOf('last') > 0){
        it1.classList.add('second');
        it2.classList.add('second');
        it3.classList.add('second');
        document.getElementById('go').style.display = 'block';

        it1.classList.remove('last');
        it2.classList.remove('last');
        it3.classList.remove('last');

        fill();
    }
})

go.addEventListener("click", function () {
    if(array.indexOf('first') > 0){
        it1.classList.add('second');
        it2.classList.add('second');
        it3.classList.add('second');
        document.getElementById('back').style.display = 'block';

        it1.classList.remove('first');
        it2.classList.remove('first');
        it3.classList.remove('first');

        fill();
    }else if(array.indexOf('second') > 0){
        it1.classList.add('last');
        it2.classList.add('last');
        it3.classList.add('last');
        document.getElementById('go').style.display = 'none';

        it1.classList.remove('second');
        it2.classList.remove('second');
        it3.classList.remove('second');

        fill();
    }
})