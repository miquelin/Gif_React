import React, { Component } from 'react';

export default class mostrarGif extends Component {

    state = {
      isHide: true
    
    }
  
    mostrarGif = () => {
      this.setState({ isHide: false })
    }

    esconderGif = () => {
        this.setState({ isHide: true })
    }
  
    render() {
      return (
        <div>
          <p><img src="https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/11/enhanced/webdr09/anigif_enhanced-21208-1446481436-2.gif" hidden={this.state.isHide} alt="Gif" onClick={this.esconderGif } /></p>
          <button onClick={this.mostrarGif}>Mostrar Gif</button>
        </div>
      );
    }
  }