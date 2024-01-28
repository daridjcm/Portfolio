$(document).ready(function() {
  $('.nav-link-scroll').on('click', function(event) {
    event.preventDefault();
    $('.nav-link-scroll').removeClass('active');
    $(this).addClass('active');
    var target = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top,
      },
      600,
      'swing'
    );
  });
  $(window).scroll(function() {
    var scrollPos = $(document).scrollTop();
    $('.section').each(function() {
      var offset = $(this).offset().top;
      var height = $(this).height();
      var id = $(this).attr('id');
      if (scrollPos >= offset && scrollPos < offset + height) {
        $('.nav-link-scroll').removeClass('active');
        $(".nav-link-scroll[href='#' + id + '']").addClass('active');
      }
    });
  });
});
