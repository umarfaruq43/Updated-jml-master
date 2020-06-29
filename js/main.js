let mobile_menu = document.querySelector('.mobile-menu');
let main_menu = document.querySelector('.main-menu');

mobile_menu.addEventListener(
  'click',
  function(even){
      if(main_menu.style.display !== 'block'){
            main_menu.style.display = 'block';
      }
      else{
          main_menu.style.display = 'none';
      }
  }
);