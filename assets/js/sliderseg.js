
var back = document.getElementById("back");
var go = document.getElementById("go");

var it1 = document.getElementById("it1");
var it2 = document.getElementById("it2");
var it3 = document.getElementById("it3");


document.getElementById('liWebsite').click();
document.getElementById('liWebsite').click();

document.getElementById('liWebsite1').click();
document.getElementById('liWebsite1').click();

document.getElementById('liWebsite2').click();
document.getElementById('liWebsite2').click();


var array = [];
var collapseActive;
var collapseActive1;
var collapseActive2;

const fill = () => {
  array = [];
  for (let i = 0; i < it1.classList.length; i++) {
    array.push(it1.classList[i]);
  }
}

fill();

back.addEventListener("click", function () {
  if (array.indexOf('second') > 0) {
    it1.classList.add('first');
    it2.classList.add('first');
    it3.classList.add('first');

    it1.classList.remove('second');
    it2.classList.remove('second');
    it3.classList.remove('second');

    fill();
  } else if (array.indexOf('last') > 0) {
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
  if (array.indexOf('first') > 0) {
    it1.classList.add('second');
    it2.classList.add('second');
    it3.classList.add('second');

    it1.classList.remove('first');
    it2.classList.remove('first');
    it3.classList.remove('first');

    fill();
  } else if (array.indexOf('second') > 0) {
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
  var i, tabcontent, tablinks, collapDesactive;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('main__card_menu_active')
    tablinks[i].classList.remove('top')
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
  evt.currentTarget.classList.add('main__card_menu_active');
  evt.currentTarget.classList.add('top');

  collapseActive = document.getElementsByClassName("main__card_menu_active");
  collapsed = document.getElementsByClassName("collapse");
  for (i = 0; i < collapsed.length; i++) {
    collapsed[i].style.maxHeight = null;
  }

  document.getElementById(`${menuName + 'C'}`).innerHTML = document.getElementById(menuName).innerHTML;

  var z;
  for (z = 0; z < collapseActive.length; z++) {
    document.getElementById(`${'li' + menuName}`).click();
    collapseActive[z].addEventListener("click", function () {
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.classList.remove("active");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.classList.add("active");
      }
    });
  }
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

  collapseActive1 = document.getElementsByClassName("main__card_menu_active");
  collapsed = document.getElementsByClassName("collapse1");
  for (i = 0; i < collapsed.length; i++) {
    collapsed[i].style.maxHeight = null;
  }

  document.getElementById(`${menuName + 'B'}`).innerHTML = document.getElementById(menuName).innerHTML;

  var z;
  for (z = 0; z < collapseActive1.length; z++) {
    document.getElementById(`${'li' + menuName }`).click();
    collapseActive1[z].addEventListener("click", function () {
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.classList.remove("active");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.classList.add("active");
      }
    });
  }
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

  collapseActive2 = document.getElementsByClassName("main__card_menu_active");
  collapsed2 = document.getElementsByClassName("collapse2");

  for (i = 0; i < collapsed2.length; i++) {
    collapsed2[i].style.maxHeight = null;
  }

  document.getElementById(`${menuName + 'B'}`).innerHTML = document.getElementById(menuName).innerHTML;

  var z;
  for (z = 0; z < collapseActive2.length; z++) {
    document.getElementById(`${'li' + menuName }`).click();
    collapseActive2[z].addEventListener("click", function () {
      var content = this.nextElementSibling;
      if (content.style.maxHeight == '0px') {
        content.style.maxHeight = '0px';
        this.classList.remove("active");
        content = ''
      } else {
        content.style.maxHeight = "526px";
        this.classList.add("active");
      }
    });
  }
}