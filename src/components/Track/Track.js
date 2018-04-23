import React from 'react';
import Track from './components/Track/Track.css';

class Track extends React.Component {
  constructor(props) {
   super(props);
   this.addTrack = this.addTrack.bind(this);
   this.removeTrack = this.removeTrack.bind(this);
   this.renderAction = this.renderAction.bind(this);
 }

 removeTrack() {
     this.props.onRemove(this.props.track);
   }
   renderAction() {
  if (this.props.isRemoval) {
      return (<a onClick = {this.removeTrack}> - </a>);
  } else {
    return (<a onClick = {this.addTrack}> + </a>);
  }
}

  render () {
    <div className="Track">
  <div className="Track-information">
    <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
  </div>
  <a className="Track-action" >{this.renderAction()}</a>
</div>
  }
};

export default Track;
