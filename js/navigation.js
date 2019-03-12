var viewport = matchMedia('(max-width:999px)');

if(viewport.matches){
  var nav = $('.navigation');
  var btn = $('.btn-menubar');

  btn.on('click', function(e){
    e.preventDefault(); //기본 이벤트 있을 시 취소 명령어
    nav.toggleClass('menu-act');
    if(nav.hasClass('menu-act')){
      btn.attr('aria-label','메인 메뉴 닫기');
    }else{
      btn.attr('aria-label','메인 메뉴 열기');
    }
  });

}
