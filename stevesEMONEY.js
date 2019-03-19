// Change header - scroll to swap out header from transparent to white
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("scrolled");
    header.classList.remove("home_page");
  } else {
    header.classList.remove("scrolled");
    header.classList.add("home_page");
  }
};


// Mobile dropdown menu - hidden until onclick of menu button
jQuery(function($){
    $( '.menu-btn' ).click(function(){
    $('.responsive-menu').toggleClass('expand')
    })
})


// Overlay on video - typewriter script
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { }";
    document.body.appendChild(css);
};


// Mobile view only - hidden on load
// Swap out between independent and enterprise content boxes
// Adds a class of active to show boxshadow
function showIndependentCt() {
  var x = document.getElementById("ind_ct");
  var y = document.getElementById("ent_ct");

  if (x.style.display === "none") {
    
    x.style.display = "block";
    y.style.display = "none";

    var element = document.getElementById("ind_img");
    element.classList.add("active");

    var element2 = document.getElementById("ent_img");
    element2.classList.remove("active");
    
  } else {

    x.style.display = "none";
    y.style.display = "block"

    var element = document.getElementById("ind_img");
    element.classList.remove("active");

    var element2 = document.getElementById("ent_img");
    element2.classList.add("active");
  }
}

function showEnterpriseCt() {
  var x = document.getElementById("ind_ct");
  var y = document.getElementById("ent_ct");

  if (y.style.display === "none") {

    y.style.display = "block";
    x.style.display = "none";

    var element = document.getElementById("ent_img");
    element.classList.add("active");
    
    var element2 = document.getElementById("ind_img");
    element2.classList.remove("active");
    
  } else {

    y.style.display = "none";
    x.style.display = "block"

    var element = document.getElementById("ent_img");
    element.classList.remove("active");

    var element2 = document.getElementById("ind_img");
    element2.classList.add("active");
  }
}