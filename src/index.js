ReactDOM.render(<App fetcher={window.searchYouTube} idFetcher={window.searchRelated} sendFunction={window.send} fetchFunction={window.fetch}/>, document.getElementById('app'));
