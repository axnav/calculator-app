$('button:not(.btn-primary)').on('click', function () {
    $('#result').val($('#result').val() + $(this).text());
  });
  $('.btn-primary').on('click', function () {
    $('#result').val(eval($('#result').val()));
  });