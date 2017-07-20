var searchYouTube = (options, callback) => {
  $.ajax({
          url: 'https://www.googleapis.com/youtube/v3/search',
          method: 'GET',
          data: {
            'q': options,
            'maxResults': '5',
            'part': 'snippet',
            'type': 'video',
            'videoEmbeddable': 'true',
            'key': window.YOUTUBE_API_KEY
          },
          success: (data) => {
            callback(data.items, data.items[0]);
          },
          error: function() {
          }
        });
};

window.searchYouTube = searchYouTube;
