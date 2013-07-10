$(document).ready(function() {
  $('.tweeting').hide();
  $('#post_tweets').on('submit', function(event) {
    event.preventDefault();
    $('.tweeting').show();
    console.log($(this));
    var data = $('textarea').serialize();
    $.post('/new_tweet', data, function(response) {
      $('.tweeting').hide();
    });
  });
});
