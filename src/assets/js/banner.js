
$(document).ready(function(){
  $('.ba-slider').each(function(){
    var cur = $(this);
    // ajustar la imagen
    var width = cur.width()+'px';
    cur.find('.resize img').css('width', width);
    // llamar los eventos de arrastar
    drags(cur.find('.handle'), cur.find('.resize'), cur);

footerBot();
  });
});

// actualizar el resize
$(window).resize(function(){
  $('.ba-slider').each(function(){
    var cur = $(this);
    var width = cur.width()+'px';
    cur.find('.resize img').css('width', width);
  });
});

function drags(dragElement, resizeElement, container) {
  
  // Inicializar el arrastrar
  dragElement.on('mousedown touchstart', function(e) {
    
    dragElement.addClass('draggable');
    resizeElement.addClass('resizable');
    
    // verificar los valores del mouse
    var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
    
    // obtener posicion inicial
    var dragWidth = dragElement.outerWidth(),
        posX = dragElement.offset().left + dragWidth - startX,
        containerOffset = container.offset().left,
        containerWidth = container.outerWidth();
 
    // establecer limites
    var minLeft = containerOffset + 10;
    var maxLeft = containerOffset + containerWidth - dragWidth - 10;
    
    // calcular la distancia
    dragElement.parents().on("mousemove touchmove", function(e) {
      
      // diferenciar entre toque y arrastrado
      var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
      
      var leftValue = moveX + posX - dragWidth;
      
      // evitar salirse de los limites
      if ( leftValue < minLeft) {
        leftValue = minLeft;
      } else if (leftValue > maxLeft) {
        leftValue = maxLeft;
      }
      
      // mover el handler
      var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
      
      // poner los nuevos valores
      $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
        $(this).removeClass('draggable');
        resizeElement.removeClass('resizable');
      });
      $('.resizable').css('width', widthValue);
    }).on('mouseup touchend touchcancel', function(){
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable');
    });
    e.preventDefault();
  }).on('mouseup touchend touchcancel', function(e){
    dragElement.removeClass('draggable');
    resizeElement.removeClass('resizable');
  });
}


       //iniciar la posición del footer
      function footerBot(){
      var element = document.getElementById("footer");
      element.classList.add("tobotom");
    }