window.addEventListener('DOMContentLoaded', function(e){
  var sshow = document.querySelector("#main-slideshow");
  var direction = document.querySelector("#direction");
  var controlArrows = document.querySelector("#control-arrows");
  var controlNav = document.querySelector("#control-nav");
  var urlDatos = document.querySelector("#data-url");
  var slideElementSize = document.querySelector("#slide-element-size");
  var autoplay = document.querySelector("#autoplay");

  sshow.addEventListener("push-state", function(e){
    history.pushState({}, null, "slide"+(e.detail.elActive+1));
  });

  direction.addEventListener("iron-select", function(e){
    console.log( e.target.selectedItem.innerText.replace(/^\s*/,"").replace(/\s*$/,"") );
    sshow.direction = e.target.selectedItem.innerText.replace(/^\s*/,"").replace(/\s*$/,"");
  });
  direction.addEventListener("iron-activate", function(e){
    sshow.run();
    hideham();
  });
  controlArrows.addEventListener("iron-select", function(e){
    console.log( e.target.selectedItem.innerText.replace(/^\s*/,"").replace(/\s*$/,"") );
    sshow.controlArrows = e.target.selectedItem.innerText.replace(/^\s*/,"").replace(/\s*$/,"");
  });
  controlArrows.addEventListener("iron-activate", function(e){
    sshow.run();
    hideham();
  });
  controlNav.addEventListener("iron-select", function(e){
    console.log( e.target.selectedItem.innerText.replace(/^\s*/,"").replace(/\s*$/,"") );
    sshow.controlNav = e.target.selectedItem.innerText.replace(/^\s*/,"").replace(/\s*$/,"");
  });
  controlNav.addEventListener("iron-activate", function(e){
    sshow.run();
    hideham();
  });
  urlDatos.addEventListener("change", function(e){
    console.log( e.target.value );
    sshow.dataUrl = e.target.value;
    sshow.run();
    hideham();
  });
  slideElementSize.addEventListener("change", function(e){
    console.log( e.target.value );
    sshow.slideElementSize = e.target.value;
    sshow.run();
    hideham();
  });
  autoplay.addEventListener("change", function(e){
    console.log( e.target.checked );
    sshow.autoplay = (e.target.checked)?"1000":"0";
    sshow.run();
    hideham();
  });

  var ham = document.querySelector("#miniheader");
  var hamIsActive = false;
  ham.addEventListener("click", function(e){
    var header = document.querySelector("#sideleft");
    header.style.transition = "1s";
    header.style.left = "0";
    hamIsActive = true;
  });

  var hideham = function(){
    if ( hamIsActive ) {
      var header = document.querySelector("#sideleft");
      header.style.transition = "1s";
      header.style.left = "-400px";
      hamIsActive = false;
    }
  };
});