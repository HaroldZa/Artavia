(window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  })();

var title = document.getElementsByClassName("footer__title_top");
var i;
var id;

for (i = 0; i < title.length; i++) {
    title[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
        
    }
});
}


var submenu = document.getElementsByClassName("submenu");
const submenu1    = document.querySelector('.menu__submenu');
 var j;
var id;

for (j = 0; j < submenu.length; j++) {
    submenu[j].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
        submenu1.classList.toggle("tran");
    } else {
        content.style.display = "block";
        submenu1.classList.toggle("tran");
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

/*   document.querySelectorAll(".hero__bar_menu").forEach(el => {
    el.addEventListener("click", e => {
    this.id = e.target.getAttribute("id");
    console.log(e)
    });
  });  

  function openNav() {
    document.getElementById("mySidenav").style.width = "270px";
  }
  
  /* Set the width of the side navigation to 0
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }  */

const toggler = document.querySelector('.menu__toggler');
const menu    = document.querySelector('.menu');

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
})