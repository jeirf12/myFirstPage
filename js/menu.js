jQuery('document').ready(function($){
  var menuBtn = $('.menu-icon'),
    menu = $('.navigation ul'),
    iniBtn = $('.inicio'),
    acercaBtn = $('.acerca'),
    servicioBtn = $('.servicios'),
    portafolioBtn = $('.portafolio'),
    contactoBtn = $('.contacto');

  menuBtn.click(() =>{
    if(menu.hasClass('show')){
      menu.removeClass('show');
    }else{
      menu.addClass('show');
    }
  });

  iniBtn.click(() =>{
    menu.removeClass('show');
  });

  acercaBtn.click(() =>{
    menu.removeClass('show')
  });

  servicioBtn.click(() =>{
    menu.removeClass('show')
  });
  
  portafolioBtn.click(() =>{
    menu.removeClass('show')
  });
  
  contactoBtn.click(() =>{
    menu.removeClass('show')
  });
});
