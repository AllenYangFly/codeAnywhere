window.onload = function() {

    var  height = window.innerHeight;
    var  scrollValue = 0;
    var oInner = document.querySelector("#frame .inner");
    var btnGo = document.querySelectorAll(".btn-Go");
    var pages = document.querySelectorAll("#frame .inner .page");
    var aMusic = document.querySelectorAll(".music-wrap i");
    var audio = document.querySelector("#audio");

    // setHeight
    (function () {
        for( var i = 0; i<pages.length; i++){
            pages[i].style.height = height + "px";
        }
    })();

  
    // scroll
    function scrollTop() {
        
        oInner.style.transform = "translate3d(0," + (--scrollValue)*height +"px,0)";
        
    }

    // add Animate
    function addAnimate() {
        var index = Math.abs(scrollValue);
        pages[index].className += " page"+index+"-animate";

    }

    (function(){
        for(var i=0; i<btnGo.length; i++){
            btnGo[i].addEventListener("click", function() {
                scrollTop();
                
                addAnimate();
            }, false);      
        }  
    })();

    // music 
    (function onOffMusic() {
        for(var i=0; i<aMusic.length; i++) {
            aMusic[i].addEventListener("click", function() {
                if(this.className == "off") {
                    this.className = "";
                    audio.play();
                }else {
                    this.className = "off";
                    audio.pause();
                }
            }, false);
            
        }
    })();

    function getStyle( obj, attr ) {
        return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
    }
};