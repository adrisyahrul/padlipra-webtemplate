// SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');
var linear = new SmoothScroll('[data-easing="linear"]', {easing: 'linear'});

var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {easing: 'easeInQuad'});
var easeInCubic = new SmoothScroll('[data-easing="easeInCubic"]', {easing: 'easeInCubic'});
var easeInQuart = new SmoothScroll('[data-easing="easeInQuart"]', {easing: 'easeInQuart'});
var easeInQuint = new SmoothScroll('[data-easing="easeInQuint"]', {easing: 'easeInQuint'});

var easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {easing: 'easeInOutQuad'});
var easeInOutCubic = new SmoothScroll('[data-easing="easeInOutCubic"]', {easing: 'easeInOutCubic'});
var easeInOutQuart = new SmoothScroll('[data-easing="easeInOutQuart"]', {easing: 'easeInOutQuart'});
var easeInOutQuint = new SmoothScroll('[data-easing="easeInOutQuint"]', {easing: 'easeInOutQuint'});

var easeOutQuad = new SmoothScroll('[data-easing="easeOutQuad"]', {easing: 'easeOutQuad'});
var easeOutCubic = new SmoothScroll('[data-easing="easeOutCubic"]', {easing: 'easeOutCubic'});
var easeOutQuart = new SmoothScroll('[data-easing="easeOutQuart"]', {easing: 'easeOutQuart'});
var easeOutQuint = new SmoothScroll('[data-easing="easeOutQuint"]', {easing: 'easeOutQuint'});
// SmoothScroll End


(function () {
  
// Burger Menu
  var burgerMenu = function() {
    $('body').on('click', '.js-padli-biography-nav-togle', function(){
      if ( $('#padli-biography-navbar').is(':visible') ) {
        $(this).removeClass('active');  
      } else {
        $(this).addClass('active'); 
      }
      
    });
  };

  $(function(){
    burgerMenu();
  });
}());

// fixed navbar    
$(document).ready(function(){

var myNavBar = {
    flagAdd: true,
    elements: [],
    init: function (elements) {
        this.elements = elements;
    },
    add : function() {
        if(this.flagAdd) {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className += " scroll-down";
            }
            this.flagAdd = false;
        }
    },
    remove: function() {
        for(var i=0; i < this.elements.length; i++) {
            document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace( /(?:^|\s)scroll-down(?!\S)/g , '' );
        }
        this.flagAdd = true;
    }
};
myNavBar.init(  [
    "footer",
]);
function offSetManager(){
    var yOffset = 0;
    var currYOffSet = window.pageYOffset;
    if(yOffset < currYOffSet) {
        myNavBar.add();
    }
    else if(currYOffSet == yOffset){
        myNavBar.remove();
    }
}
window.onscroll = function(e) {
    offSetManager();
}
offSetManager();
});