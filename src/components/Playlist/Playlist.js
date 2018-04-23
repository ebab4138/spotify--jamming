import React from 'react';
import Playlist from './components/PlatList/PlayList.css';

class Playlist extends React.component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  render () {
    <div className="Playlist">
  <input defaultValue="New Playlist" onChange{this.handleNameChange}/>
  <div className='Tracks'>{this.props.playlistTracks}
  onRemove ={this.props.onRemove}
  isRemoval = true </div>
  <a className="Playlist-save" onClick ={this.props.onSave}>SAVE TO SPOTIFY</a>
</div>
  }
};

export default Playlist;
