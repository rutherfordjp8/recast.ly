class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: window.exampleVideoData,
      videoPlaying: window.exampleVideoData[0]
    };
    this.onVideoTitleClick = this.onVideoTitleClick.bind(this);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5> <Search/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer object={this.state.videoPlaying}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><VideoList array={this.state.videos} onVideoTitleClick={this.onVideoTitleClick}/></h5></div>
          </div>
        </div>
      </div>
    );
  }

  onVideoTitleClick(selectedVideo) {
    this.setState({
      videoPlaying: selectedVideo
    });
  }

  search(q) {
    $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/search',
            method: 'GET',
            data: {
              'q': q,
              'maxResults': '5',
              'part': 'snippet',
              'type': 'video',
              'videoEmbeddable': 'true',
              'key': window.YOUTUBE_API_KEY
            },
            success: (data) => {
              this.setState({
                videos: data.items,
                videoPlaying: data.items[0]
              });
            },
            error: function() {
            }
          });

  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
