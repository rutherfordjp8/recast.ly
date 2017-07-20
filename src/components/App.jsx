class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: window.exampleVideoData,
      videoPlaying: window.exampleVideoData[0],
      searchText: ''
    };
    this.onVideoTitleClick = this.onVideoTitleClick.bind(this);
    this.onSearchButton = this.onSearchButton.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5> <Search textchange={this.onSearchTextChange} buttoncallback={this.onSearchButton} searchedWords = {this.state.searchText}/></h5></div>
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

  onSearchTextChange(value) {
    this.setState({
      searchText: value
    });
  }

  onSearchButton() {
    this.search(this.state.searchText);
  }

  search(q) {
    this.props.fetcher(q, (videosvalue, videoPlayingvalue) => {this.setState({
        videos: videosvalue,
        videoPlaying: videoPlayingvalue
      });
    })
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
