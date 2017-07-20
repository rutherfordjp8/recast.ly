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
            'key': window.YOUTUBE_API_KEY,
            'chart': 'mostPopular'
          },
          success: (data) => {
            callback(data.items, data.items[0]);
          },
          error: function() {
          }
        });
};

var searchRelated = (id, callback) => {
  $.ajax({
          url: 'https://www.googleapis.com/youtube/v3/search',
          method: 'GET',
          data: {
            'maxResults': '5',
            'part': 'snippet',
            'type': 'video',
            'videoEmbeddable': 'true',
            'key': window.YOUTUBE_API_KEY,
            'relatedToVideoId': id
          },
          success: (data) => {
            callback(data.items);
          },
          error: function() {
          }
        });
}

window.searchYouTube = searchYouTube;
window.searchRelated = searchRelated;
