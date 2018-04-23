import React from 'react';
import SearchResults from './components/SearchResults/SearchResults.css';

class SearchResults extends React.component {

  search() {
    this.props.onSearch(this.state.term);
  }

  render () {
    <div className="SearchResults">
  <h2>Results</h2>
  <TrackList tracks={this.props.searchResults}
          onAdd = {this.props.onAdd}
          isRemoval={false}/>

  }
};

export default SearchResults;
