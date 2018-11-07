import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class Dashboard extends Component {
  state = {
    names: [
      { id: uuid(), name: 'Michelangelo' },
      { id: uuid(), name: 'Leonardo' },
      { id: uuid(), name: 'Donatello' },
      { id: uuid(), name: 'Raphael' }
    ]
  }

  render() {
    const { items } = this.state;
    return(
      <Container>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt('Enter Name');
            if(name) {
              this.setTate(state => ({
                names: [...state.items, { id: uuid(), name }]
              }));
            }
          }}
        >Add User</Button>
      </Container>
    );
  }

}

export default Dashboard;
