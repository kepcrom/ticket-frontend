import React, { Component } from 'react';

class TicketView extends React.Component {

  constructor(){
    super();
    this.state = {
      tickets : [],
    };
  }

  componentDidMount(){
    fetch('http://127.0.0.1:8000/api:bar/')
      .then(resp => resp.json())
      .then(data => this.setState({ tickets: data.results }));
  }

  render(){
    const {tickets} = this.state;
    return (
      <ul>
        {tickets.map(ticket =>
          <li key={ticket.Number}>
            <a href={ticket.url}>{ticket.Summary}</a>
          </li>
        )}
      </ul>
    );
  }

}

export default TicketView;
