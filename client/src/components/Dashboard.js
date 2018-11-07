import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class Dashboard extends Component {
  state = {
    users: [
      { id: uuid(), name: 'Michelangelo' },
      { id: uuid(), name: 'Leonardo' },
      { id: uuid(), name: 'Donatello' },
      { id: uuid(), name: 'Raphael' }
    ]
  }

  render() {
    const { users } = this.state;
    return(
      <Container>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt('Enter Name');
            if(name) {
              this.setState(state => ({
                users: [...state.users, { id: uuid(), name }]
              }));
            }
          }}
        >
        Add User
        </Button>

        <ListGroup>
          <TransitionGroup className="dashboard">
            {users.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    this.setState(state => ({
                      users: state.users.filter(user => user.id !== id)
                    }));
                  }}
                >&times;
                </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default Dashboard;
