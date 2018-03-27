~function() {
    var desW = 640,
        winW = document.documentElement.clientWidth,
        ratio = winW / desW;
        document.documentElement.style.fontSize = ratio * 100 + "px";
}();
var step = 0;
var mySwiper = new Swiper ('.swiper-container', {
 direction: 'vertical',
 loop: true,
 effect: 'fade',
 on:{
        slidePrevTransitionStart: function(){ 
            step--;
            if( step < 0 ) {
                step = 1;
            }    
            change();     
        },
        slideNextTransitionStart: function() {
            step++;
            if( step < 0 ) {
                step = 2;
            }    
            change();    
        }
    }
});

function change(activeIndex) {
    var divList =document.getElementsByClassName("swiper-slide");
    [].forEach.call(divList, function (curDiv, index) {
        curDiv.id = index === step ? curDiv.getAttribute("trueId") : "";
    });
}
