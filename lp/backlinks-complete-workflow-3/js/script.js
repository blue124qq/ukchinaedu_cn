$(document).ready(function () {



  // Validtion forms for Safari

  webshim.activeLang('en');
  webshims.polyfill('forms');
  webshims.cfg.no$Switch = true;

  $(".scrollTo").on("click", function () {
    var idScroll = $(this).attr('data-scroll');
    $.scrollTo(idScroll, 1000);
    return false;
  });


  /*********    Year    *********/
  var now = new Date();
  year = now.getFullYear();
  $('.year').html(year);

 

  /*scroll to*/

  $('a[href^="#"]').bind('click.smoothscroll', function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
      window.location.hash = target;
    });
  });

  /*********  Fixed header  *********/

  $(window).scroll(function () {
    var scroll_position = $(window).scrollTop();
    var mobil_width = $(window).width();
    if (mobil_width > 300) {
      if (scroll_position > 600) {
        $('.nav').addClass('sticky');
      } else {
        $('.nav').removeClass('sticky');
      }
    } else {
      $('.nav').removeClass('sticky');
    }
  });

  /*********    Accordion    *********/

  $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      // more then one submenu open?
      this.multiple = multiple || false;
      
      var dropdownlink = this.el.find('.dropdownlink');
      dropdownlink.on('click',
                      { el: this.el, multiple: this.multiple },
                      this.dropdown);
    };
    
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          //this is the ul.submenuItems
          $next = $this.next();
      
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if(!e.data.multiple) {
        //show only one menu at the same time
        $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
      }
    }
    
    var accordion = new Accordion($('.accordion-menu'), false);
  })

  /*********    Accordion 2   *********/

  $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      // more then one submenu open?
      this.multiple = multiple || false;
      
      var dropdownlink = this.el.find('.dropdownlink-2');
      dropdownlink.on('click',
                      { el: this.el, multiple: this.multiple },
                      this.dropdown);
    };
    
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          //this is the ul.submenuItems
          $next = $this.next();
      
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if(!e.data.multiple) {
        //show only one menu at the same time
        $el.find('.submenuItems-2').not($next).slideUp().parent().removeClass('open');
      }
    }
    
    var accordion = new Accordion($('.accordion-menu-2'), false);
  })

  /*********    Accordion 3   *********/

  $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      // more then one submenu open?
      this.multiple = multiple || false;
      
      var dropdownlink = this.el.find('.dropdownlink-3');
      dropdownlink.on('click',
                      { el: this.el, multiple: this.multiple },
                      this.dropdown);
    };
    
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          //this is the ul.submenuItems
          $next = $this.next();
      
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if(!e.data.multiple) {
        //show only one menu at the same time
        $el.find('.submenuItems-3').not($next).slideUp().parent().removeClass('open');
      }
    }
    
    var accordion = new Accordion($('.accordion-menu-3'), false);
  })
});
