class CommentList extends React.Component {
  constructor(props){
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.name;
    this.text;
  }


  render() {
    return (
      <div>
        <div className="comment-bar form-inline">
          <input className="name-form-control" type="text" placeholder="Name..." maxLength="10" onChange={this.handleNameChange}/>
          <div className="blankLine"></div>
          <textarea className="comment-form-control" type="text" cols="40" rows="5" placeholder="Comment..." onChange={this.handleTextChange}/>

          <button className="btn comment" onClick={this.handleClick}> Submit
          </button>
        </div>
        <div className="comment-list">
          {this.props.array.map(comment =>
              <CommentEntry object={comment}/>
          )}
        </div>
      </div>
    )
  }

  handleNameChange(e){
    this.name = e.target.value;
  }

  handleTextChange(e){
    this.text = e.target.value;
  }

  handleClick(){
    console.log("clicked")
    var message = {
      'username':this.name,
      'text':this.text
    }
    this.props.sender(message);
    this.props.fetcher()
  }
};




// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
CommentList.propTypes = {
  Commentlist: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.CommentList = CommentList;
