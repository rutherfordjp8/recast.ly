class VideoListEntry extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div><h5>
        <div className="video-list-entry media">
          <div className="media-left media-middle">
            <img className="media-object" src={this.props.object.snippet.thumbnails.default.url} alt="" />
          </div>
          <div className="media-body">
            <div className="video-list-entry-title" onClick={this.check.bind(this, this.props.object)}>{this.props.object.snippet.title}</div>
            <div className="video-list-entry-detail">{this.props.object.snippet.description}</div>
          </div>
        </div>
      </h5></div>
    );
  }

  check(selectedVideo) {
    this.props.onVideoTitleClick(selectedVideo);
  }
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
