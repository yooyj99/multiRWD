$(window).resize(function (){
  location.reload();
});//리사이징

var viewport = matchMedia('(max-width:999px)'); 

if(viewport.matches){
  var nav = $('.navigation');
  var btn = $('.btn-menubar');
  var menu = $('.menu');
  var lists = $('.menu-list');
  var items = $('.menu-item');
  var sub = $('.sub-menu');

  lists.attr('aria-haspopup','true'); //서브메뉴가 있는 팝업 메뉴(웹접근성)
  lists.attr('aria-expanded','false'); //펼침상태 여부(웹접근성)
  items.attr('tabindex','0');
  items.addClass('icon-plus');
  
  // 메인메뉴 제어 버튼 
  btn.on('click', function(e){
    e.preventDefault(); //기본 이벤트 있을 시 취소 명령어
    nav.toggleClass('menu-act');
    if(nav.hasClass('menu-act')){
      btn.attr('aria-label','메인 메뉴 닫기');
    }else{
      btn.attr('aria-label','메인 메뉴 열기');
    }
  });

  // 메뉴 항목 선택 시 하위메뉴 제어
  items.on('click keyup', function(e){
    e.preventDefault();
    if(e.type === 'click' || (e.type === 'keyup' && e.keyCode === 13)){
      sub.removeClass('sub-menu-show');
      lists.attr('aria-expanded','false');
      items.addClass('icon-plus');
      $(this).removeClass('icon-plus').addClass('icon-minus');
      $(this).siblings().addClass('sub-menu-show');
      $(this).parent().attr('aria-expanded','true');
    }
  });

  // 키보드 포커스가 메뉴를 벗어나면 메인메뉴 감추기
  menu.on('focusout', function(){
      nav.removeClass('menu-act');
  });
  menu.on('focusin', function(){
      nav.addClass('menu-act');
  });


}
