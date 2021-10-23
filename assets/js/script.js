$(function(){
  
  $("a").click(function(evento){
    if (this.hash !== "") {
        event.preventDefault();

        var gato = this.hash;

        $("html, body").animate({
            scrollTop: $(gato).offset().top
        },
        800, function(){
            window.location.hash = gato;
      });
  }      
});

  $('[data-toggle="popover"]').popover();

});

/*Para probar JS:
1. <script src="assets/js/script.js"></script> en HTML
2. alert("esta es una prueba desde archivo script");
*/