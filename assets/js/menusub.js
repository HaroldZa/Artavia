loadSlide();

var collapseActive;
var last;
var cont =0;

function menu(evt, menuName) {
  if (isNaN(menuName.charAt(menuName.length - 1))) {
    last = '';
  }else{
    last = menuName.charAt(menuName.length - 1);
  }

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent" + last);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks" + last);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('main__card_menu_active')
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
  evt.currentTarget.classList.add('main__card_menu_active');

  collapseActive = collapseActive + last;

  collapseActive = document.getElementsByClassName("main__card_menu_active");
  collapsed = document.getElementsByClassName("collapse" + last);
  for (i = 0; i < collapsed.length; i++) {
    collapsed[i].style.maxHeight = null;
  }

  document.getElementById(`${menuName + 'B'}`).innerHTML = document.getElementById(menuName).innerHTML;

  var z;
  for (z = 0; z < collapseActive.length; z++) {
    document.getElementById(`${'li' + menuName}`).click();
    collapseActive[z].addEventListener("click", function () {
      var content = this.nextElementSibling;
      if (content.style.maxHeight == '0px') {
        content.style.maxHeight = '0px';
        this.classList.remove("active");
        content = ''
      } else {
        content.style.maxHeight = "100vh";
        this.classList.add("active");
      }
      if(cont > 2){
        setTimeout(function() { document.getElementById('tabMenu'+last).scrollIntoView(); }, 0);
      }
    });
  }
 
  cont++;
}

/* Slider Review */

$('.slider-for').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  asNavFor: '.slider-for',
  dots: true,
  focusOnSelect: true
});

/* End Slider Review */


function loadSlide(){
  document.getElementById('liWebsite').click();
  document.getElementById('liWebsite').click();

  document.getElementById('liWebsite1').click();
  document.getElementById('liWebsite1').click();

  document.getElementById('liWebsite2').click();
  document.getElementById('liWebsite2').click();
}