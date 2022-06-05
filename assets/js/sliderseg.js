
var back = document.getElementById("back");
var go = document.getElementById("go");

var it1 = document.getElementById("it1");
var it2 = document.getElementById("it2");
var it3 = document.getElementById("it3");

var array = [];

const fill = () =>{
    array = [];
    for(let i=0; i<it1.classList.length; i++){
        array.push(it1.classList[i]);
    }
}

fill();

back.addEventListener("click", function () {
    if(array.indexOf('second') > 0){
        it1.classList.add('first');
        it2.classList.add('first');
        it3.classList.add('first');

        it1.classList.remove('second');
        it2.classList.remove('second');
        it3.classList.remove('second');

        fill();
    }else if(array.indexOf('last') > 0){
        it1.classList.add('second');
        it2.classList.add('second');
        it3.classList.add('second');

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

        it1.classList.remove('first');
        it2.classList.remove('first');
        it3.classList.remove('first');

        fill();
    }else if(array.indexOf('second') > 0){
        it1.classList.add('last');
        it2.classList.add('last');
        it3.classList.add('last');

        it1.classList.remove('second');
        it2.classList.remove('second');
        it3.classList.remove('second');

        fill();
    }
})

function menu(evt, menuName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('main__card_menu_active')  
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
    evt.currentTarget.classList.add('main__card_menu_active');
}

function menu1(evt, menuName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent1");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks1");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('main__card_menu_active')  
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
    evt.currentTarget.classList.add('main__card_menu_active');
}

function menu2(evt, menuName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks2");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('main__card_menu_active')  
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
    evt.currentTarget.classList.add('main__card_menu_active');
}

var a = document.getElementById("carousel");

a.addEventListener("click", function () {
  console.log('aaa')
})