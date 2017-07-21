class CommentEntry extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div><h5>
        <div className="video-list-entry media">
          <div className="media-left media-middle">
            <img className="media-object" src="src/data/icon.png" alt="" height="30"/>
            <div className="comment-entry-name">{_.escape(this.props.object.username)}</div>
          </div>
          <div className="media-body">
            <div className="comment-entry-detail">{_.escape(this.props.object.text)}</div>
          </div>
        </div>
      </h5></div>
    );
  }
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
CommentEntry.propTypes = {
  comment: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.CommentEntry = CommentEntry;
