

$(function(){
  "use strict";

  var init = function() {
    initPostNav();
    initFitVids();
    initHeroVideo();
    initNewsletterForm();
    initUpdates();
    initExternalLinks();
    initWeather();
  };

  var prev = $('#prev'),
    next = $('#next');
  var initPostNav = function() {
    $(document).keydown(function(e) {
      if (e.keyCode == 37) { // left
        if (prev.length) {
          window.location.href = prev.attr('href');
        }
      } else if (e.keyCode == 39) { // right
        if (next.length) {
          window.location.href = next.attr('href');
        }
      }
    });
  };

  var initHeroVideo = function() {
    if ($('#hero').find('video').length > 0) {
      var video = $('#hero').find('video')[0];
      video.addEventListener('ended', (function(e) {
        video.currentTime = 0.1;
        return video.play();
      }), false);
      if (window.outerWidth >= 720) {
        return video.play();
      }
    }
  };

  var initFitVids = function() {
    $('.post').fitVids({
      customSelector: '.fitvid'
    });
  };

  var initNewsletterForm = function() {
    $(document).ready(function() {
      $('.js-newsletter').on('submit', function(e) {
        e.preventDefault();
        var $form = $(this);
        var $message = $form.find('.newsletter__message');
        var $fields = $form.find('.newsletter__fields');
        var $button = $form.find('.newsletter__submit');

        $button.val("Loading...").prop('disabled', true);

        $.getJSON($form.attr('action') + "?callback=?", $form.serialize(), function(data) {
          if (data.Status === 400) {
            $message.text(data.Message).removeClass('hidden');
            $button.val("Submit").prop('disabled', false);
          } else {
            $message.text('Thanks for subscribing!').removeClass('hidden');
            $fields.addClass('hidden');
          }
        });
      });
    });
  };

  var initExternalLinks = function() {
    $('a[href^="http://"], a[href^="https://"]').attr('target', '_blank');
  };

  // initialize
  // ----------

  init();
});
