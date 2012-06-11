// Generated by CoffeeScript 1.3.1
(function() {

  window.summarize = function(elements, options) {
    options = $.extend({
      summary_length: 150
    }, options);
    elements.each(function() {
      var $el, text;
      $el = $(this);
      text = $.trim($el.text());
      $el.data('full-text', text);
      if (text.length > options.summary_length) {
        text = text.slice(0, options.summary_length) + '... ';
      }
      $el.text(text);
      return $el.append('(<a href="#read-more" class="read-more">more</a>)');
    });
    return $('.read-more').live('click', function() {
      var parent, text;
      parent = $(this).parent();
      text = parent.data('full-text');
      parent.text(text);
      return false;
    });
  };

}).call(this);
