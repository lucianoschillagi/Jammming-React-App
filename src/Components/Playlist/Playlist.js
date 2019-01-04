/* Playlist Component */
import React, { Component } from 'react';
import './Playlist.css';
// import TrackList component
import TrackList from '../TrackList/TrackList';

/*

61- In the Playlist render method, pass .handleNameChange() to an onChange property.
*/

class Playlist extends Component {

  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange(this);
  }

  // task: manejar el cambio de nombre del playlist
  handleNameChange(event) {
    // WARNING: pedir ayuda (59)
  }

  render() {
    return (
      <div className="Playlist" 
           onNameChange={this.props.updatePlaylistName}
           onRemove={this.props.removeTrack} 
           onChange={this.handleNameChange} 
           onSave={this.props.savePlaylist}>
        {/* el nombre del playlist */}
        <input value="New Playlist"/>

        {/* la lista de tracks */}
        {/* Pasa el track list dentro del play list y le agrega un método para remover tracks */}
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.removeTrack} isRemoval={true}/>

        {/* el botón para guardar el play list actual */}
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
    </div>
    );
  }
}

export default Playlist;
