import React from 'react';
import forrest from '../images/forrest.png'

const AppSummary = () => {
  return (
    <div id="summary">
      <h2>Welcome</h2>
      <img alt="Forrest Benton Profile" src={forrest} />
      <p>
        Welcome to React Trader. This is a sample application I've
        developed to practice the use of React and Redux. This app utilizes the
        <a target="_blank" rel="noopener noreferrer" href="https://iextrading.com/developer/docs/"> IEX API </a>
        to retrieve market data via the <a target="_blank" rel="noopener noreferrer" href="https://socket.io/">
        socket.io </a> websocket and basic AJAX requests. Executed trades are saved to a backend Rails API.
      </p>
      <p>
        Currently, this application is not designed to handle more sophisticated trades
        like short-selling. It is a simple buy/sell for stocks available on the IEX API.
      </p>
      <br />
      <p>
        <strong>- Forrest E. Benton</strong>
      </p>


    </div>
  )
}

export default AppSummary;
