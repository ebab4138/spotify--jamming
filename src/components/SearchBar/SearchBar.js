import React from 'react';
import SearchBar from './components/SearchBar/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

    handleTermChange(event) {
      this.setState({term: event.target.value});
    }

  render () {
    <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist"
  onChange={this.handleTermChange}/>
  <a>SEARCH</a>
</div>
  }
};

export default SearchBar;
