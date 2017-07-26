$(document).ready(function () {
  $('#contact form').on('submit', function (e) {
    e.preventDefault();

    var $form = $(e.currentTarget),
      $email = $form.find('#contact-email'),
      $button = $form.find('button[type=submit]');

    if ($email.val().indexOf('@') == -1) {
      vaca = $email.closest('form-group')
      $email.closest('.form-group').addClass('has-error');
    } else {
      $form.find('.form-group').addClass('has-success').removeClass('has-error');
      $button.attr('disabled', 'disabled');
      $button.after('<span>訊息已送出。我們將境快與您聯繫。<span>');
    }
  });
});


$(document).ready(function(){
  $('#sign-btn').on('click',function(e){
    $(e.currentTarget).closest('ul').hide();
    $('form#signin').fadeIn('fast');
  });
});




$(document).ready(function(){
 var $charCount;
 var maxCharCount;

 $charCount = $('#tweet-modal .char-count')
 maxCharCount = parseInt($charCount.data('max'),10);

 $('#tweet-modal textarea').on('keyup',function(e){
   var tweetLength = $(e.currentTarget).val().length;
   console.log(maxCharCount);
   console.log(tweetLength);
   var n = (maxCharCount - TweetLength);
   console.log(n);
   
 });
});


$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


$(document).ready(function(){
  var popverContentTemplate=''+
  '<img src="imgs/test4.png" class="img-rounded">'+
  '<div class=info">'+
  '<strong>狗品種</strong>'+
  '<a href="#" class="btn btn-default">'+
  '<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>'+
  '關注'+
  '</a>'+
  '</div>';
  
  $('[data-toggle="popover"]').popover({
      placement:'bottom',
      html:true,
      content:function(){
        return popverContentTemplate;
      }
    });

  $('[data-toggle="popover"]').on('show.bs.popover',function(){
    var $icon = $(this).find('span.glyphicon');

    $icon.removeClass('glyphicon-plus').addClass('glyphicon-ok');
    $(this).append('中');
  });
});

