
(function () {
    window.scrollTo(0, 0);
}());

var navbar = document.getElementById('navscroll');

window.onscroll = function() { 
  if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled')
  } else {
      navbar.classList.remove('scrolled')
  }
}

var title = document.getElementsByClassName("footer__title_top");
var i;

for (i = 0; i < title.length; i++) {
    title[i].addEventListener("click", function() {
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
        this.classList.remove("active");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.classList.add("active");
      }
    });
  }


var coll = document.getElementsByClassName("submenu");
var j;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

document.querySelectorAll(".footer__title_top").forEach(el => {
    el.addEventListener("click", e => {
    this.id = e.target.getAttribute("id");
    if(this.id == 'img1' || e.path[1].outerHTML.indexOf('img1') > -1){
        this.id = 'img1';
    }
    else if(this.id == 'img2' || e.path[1].outerHTML.indexOf('img2') > -1){
        this.id = 'img2';
    }
    else if(this.id == 'img3' || e.path[1].outerHTML.indexOf('img3') > -1){
        this.id = 'img3';
    }
    if(e.path[1].outerHTML.indexOf('active') > -1){
        document.getElementById(this.id).src='assets/images/icons/minus.png';
        document.getElementById(this.id).style.paddingRight = "20px"; 
    }else{
        document.getElementById(this.id).src='assets/images/icons/plus.png';
        document.getElementById(this.id).style.paddingRight = "15px"; 
    }
    });
  });

const toggler = document.querySelector('.menu__toggler');
const menun    = document.querySelector('.menu');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menun.classList.toggle('active');
})