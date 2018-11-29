import React, { Component } from 'react';

class SelectedStock extends Component {
  // state = { stock: {} }
  //
  // renderMessage(message) {
  //   this.setState({ stock: message })
  // }
  //
  // componentDidMount() {
  //   const socket = require('socket.io-client')('https://ws-api.iextrading.com/1.0/tops')
  //   socket.on('message', message => {
  //     this.renderMessage(JSON.parse(message))
  //   } )
  //   socket.on('connect', () => {
  //     socket.emit('subscribe','fb')
  //   })
  // }
  //
  // componentWillUnmount() {
  //   const socket = require('socket.io-client')('https://ws-api.iextrading.com/1.0/tops')
  //   socket.on('disconnect', () => alert('disconnected'))
  // }



  render() {
    return (
      <div id="page-selected-stock" className="page">
      At the Stock Page
      </div>
    )
  }
}

export default SelectedStock;
