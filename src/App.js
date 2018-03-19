import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor () {
    super();

    this.state = {
      allowEdit: true,
      fontColor: 'navy blue',
      fontSize: 12,
      fontFamily: 'monospace'
    }
    this.updateColor = this.updateColor.bind(this)
  }

  updateColor(val){
    this.setState (() => {
      return {
        fontColor: val
      }
    })
  }

  

   updateSize (val) {

   }

  // updateFamily

  // updateEditStatus

  render() {
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          <ColorChanger fontColor={this.state.fontColor} update={this.updateColor}/>
          { /* Render SizeChanger */ }
          { /* Render FamilyChanger */ }
        </div>
        <div className="textArea">
          <TextContainer 
            fontColor ={this.state.fontColor}
            fontSize ={this.state.fontSize}
            fontFamily = {this.state.fontFamily}/>
        </div>
      </div>
    )
  }
}

export default App;
