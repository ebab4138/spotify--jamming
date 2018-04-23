import React, { Component } from 'react';
import logo from './public/favicon.ico';
import './src/App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import SearchResults from './components/SearchResults/SearchResults.js';
import Playlist from './components/Playlist/Playlist.js';
import App from '.App/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
      searchResults: [],
      playlistTracks: [],
      playlistName : 'New Playlist',
      term: null
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  },

addTrack (track) {
  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return;
}

},

removeTrack(track) {
    this.setState((prevState) => ({
     playlistTracks: prevState.playlistTracks.filter(i => i.id !== track.id)
   }));
 },

 updatePlaylistName (name) {
   this.setState({playlistName: name});
 },

 savePlaylist() {
    let trackURIs = this.state.playlistTracks.map(track => track.uri);

    Spotify.savePlaylist(this.state.playlistName, trackURIs);
    this.setState({playlistName: 'New Playlist', searchResults: []});
  },

  search(term) {
    Spotify.search(term).then(track => {
      this.setState({searchResults: track})
    })
  }

  render() {
return (
      <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
      <SearchBar onSearch={this.search}/>
      <div className="App-playlist">
        <SearchResults searchResults = {this.state.searchResults} onAdd = {this.addTrack}/>
        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}
                     onNameChange={this.updatePlaylistName}  onSave={this.savePlaylist}
                     onRemove={this.removeTrack}
      </div>
    </div>
  </div>
)
  }
};


export default App;
