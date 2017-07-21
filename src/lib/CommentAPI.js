$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('X-Parse-Application-Id', '2745f6eedad1770c6ebaf03f8a97cf0cc2f66706');
  jqXHR.setRequestHeader('X-Parse-REST-API-Key', '4f44a6835e581124936858b658e8ea99e278d371');
});

var fetch = (callback) => {
  return $.ajax({
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'GET',
      data: 'order=-createdAt',
      dataType: 'JSON',
      contentType: 'json',
      success: (data) => {
        console.log('chatterbox: Message received');
        callback(data.results.slice(0,10));
      },
      error: (data) => {
        console.error('chatterbox: Failed to send message');
      }
    });
};

var send = (message, callback) => {
  $.ajax({
      url: 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });
}

window.send = send;
window.fetch = fetch;
