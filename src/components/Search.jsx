class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  render(){
    return(
    <div className="search-bar form-inline">
      <input className="form-control" type="text" placeholder="Search..." value={this.props.searchedWords} onChange={this.handleSearch} onKeyPress={this.handleKeyPress}/>
      <button className="btn hidden-sm-down" onClick={this.handleButton}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
    )
  }

  handleSearch(e){
    e.preventDefault();
    this.props.textchange(e.target.value);
  }

  handleButton(){
    this.props.buttoncallback();
  }

  handleKeyPress(e){
    if (e.key === 'Enter') {
      this.handleButton();
    }
  }


};


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
