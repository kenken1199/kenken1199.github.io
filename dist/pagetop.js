  $(function(){
    $('#back_to_top').hide();

    $(window).scroll(function(){
      if($(this).scrollTop() > 60){
        $('#back_to_top').fadeIn();
      }else{
        $('#back_to_top').fadeOut();
      }
    });

    $('#back_to_top').click(function() {
                $('body, html').animate({
                    scrollTop:0
                }, 500);
                return false;
            });
        });
