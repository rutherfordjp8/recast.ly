class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      videoPlaying: {},
      searchText: '',
      autoplay: 0,
      comments: [],
      name: ''
    };
    this.onVideoTitleClick = this.onVideoTitleClick.bind(this);
    this.onSearchButton = this.onSearchButton.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.searchById = this.searchById.bind(this);
    this.fetchedMessages = this.fetchedMessages.bind(this);
    this.sendMessages = this.sendMessages.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  render() {
    if (!this.state.videos.length) {
      return (
        <div> Loading </div>
      )
    }
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5> <Search textchange={this.onSearchTextChange} buttoncallback={this.onSearchButton} searchedWords = {this.state.searchText}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer object={this.state.videoPlaying} autoplay = {this.state.autoplay}/></h5></div>
            <div className="chatterbox">
            <div><h5><CommentList array={this.state.comments} fetcher={this.fetchedMessages} sender={this.sendMessages} nameChanger={this.onNameChange}/></h5></div>
            </div>
          </div>
          <div className="col-md-5">
          <p className= "check"> <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckChange}
          > Autoplay </input> </p>
            <div><h5><VideoList array={this.state.videos} onVideoTitleClick={this.onVideoTitleClick}/></h5></div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.search('');
    this.fetchedMessages();
  }

  onVideoTitleClick(selectedVideo) {
    this.setState({
      videoPlaying: selectedVideo
    });
    this.searchById(selectedVideo.id.videoId);
  }

  onSearchTextChange(value) {
    this.setState({
      searchText: value
    });
    this.debouncedSearch(value)

  }

  handleCheckChange() {
    this.setState({
      autoplay: !!this.state.autoplay ?  0 : 1
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

  debouncedSearch(q) {
    _.debounce(this.search, 500).call(this, q);
  }

  searchById(id) {
    this.props.idFetcher(id, (videovalue) => {this.setState({
      videos: videovalue
      });
    })
  }

  fetchedMessages() {
    this.props.fetchFunction((fetchedMessages) => { this.setState({
        comments: fetchedMessages
      });
    })
  }

  sendMessages(message) {
    this.props.sendFunction((message));
  }

  onNameChange(namevalue) {
    this.setState({
      name: namevalue
    }
    )
  }

};



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
