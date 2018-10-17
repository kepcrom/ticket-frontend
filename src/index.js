import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TicketView from './ticket';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <TicketView name="Some Tickets" />,
  document.getElementById('tickets')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
