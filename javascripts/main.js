$(function() {
  $('#generate-ribbon').submit(function(event) {
    event.preventDefault();
    var $container = $('#generated'),
        $generated = $container.find('textarea'),
        formValues = $(event.target).serializeArray(),
        $script = $('<script>'),
        fields = {};

    $.each(formValues, function(_, field) {
      fields[field.name] = field.value;
    });

    $script.attr({
      type: 'text/javascript',
      src: 'http://d2xzi4fir1vmdf.cloudfront.net/bw-ribbon.js',
      'data-gh': fields.repo
    });

    if (fields.gravatar) {
      var emailHash = md5(fields.gravatar.trim().toLowerCase());
      $script.attr('data-gr', emailHash);

      if (fields.author) {
        $script.attr('data-au', fields.author);
      }
    }

    $generated.val($('<a>').append($script).html());
    $container.fadeIn('fast');
  });
});
