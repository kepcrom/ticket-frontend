import React, { Component } from 'react';

class TicketLogin extends React.Component {
  constructor(){
    super();
    this.state = {  };
  }

  render() {
    return (
      <div>
    <p>
      <label for='Username'>User Name:</label>
      <input type='text' name='Username' id='Username' />
   </p>
   <p>
    <label for='Password'>Password:</label>
      <input type='text' name='Password' id='Password' />
</p>
    </div>
    );
  }
}

class TicketView extends React.Component {

  constructor(){
    super();
    this.state = {
      tickets : [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount(){
    this.setState({ isLoading: true });
    fetch('http://127.0.0.1:8000/api:bar/')
      .then(resp => {
        if(resp.ok) {
          return resp.json();
        } else if(resp.status === 401) {
          throw new Error('Need to Login ...');
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ tickets: data.results, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render(){
    const {tickets,isLoading,error} = this.state;
    if( error ) {
      return <p>{error.message}
        { new TicketLogin().render() }
            </p>;
    }
    if( isLoading ) {
      return <p>Loading ...</p>;
    }
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
