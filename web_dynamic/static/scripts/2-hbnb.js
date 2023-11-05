#!/usr/bin/node
const res = {};
$(document).ready(function () {
  $('input').prop('checked', false);
  $('input').on('change', function () {
    let text = '';
    let key = $(this).data('id');
    const value = $(this).data('name');
    if ($(this).is(':checked')) {
      res[key] = value;
    } else {
      delete res[key];
    }
    for (key in res) {
      if (text === '') {
        text = res[key];
      } else {
        text = text + ', ' + res[key];
      }
    }
    console.log(text);
    $('.amenities h4').text(text);
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    console.log(data);
    if (data.status === 'OK') {
      console.log('data');
      $('div#api_status').addClass('available');
    } else {
      console.log('red');
      $('div#api_status').removeClass('available');
    }
  });
}

);
