jQuery('document').ready(function($){
  var menuBtn = $('.menu-icon'),
    menu = $('.navigation ul'),
    header = $('.header'),
    iniBtn = $('.inicio'),
    acercaBtn = $('.acerca'),
    servicioBtn = $('.servicios'),
    portafolioBtn = $('.portafolio'),
    contactoBtn = $('.contacto');

  menuBtn.click(() =>{
    if(menu.hasClass('show')){
      header.removeClass('showheader')
      menu.removeClass('show');
    }else{
      header.addClass('showheader')
      menu.addClass('show');
    }
  });

  iniBtn.click(() =>{
    header.removeClass('showheader')
    menu.removeClass('show');
  });

  acercaBtn.click(() =>{
    header.removeClass('showheader')
    menu.removeClass('show')
  });

  servicioBtn.click(() =>{
    header.removeClass('showheader')
    menu.removeClass('show')
  });
  
  portafolioBtn.click(() =>{
    header.removeClass('showheader')
    menu.removeClass('show')
  });
  
  contactoBtn.click(() =>{
    header.removeClass('showheader')
    menu.removeClass('show')
  });
});
