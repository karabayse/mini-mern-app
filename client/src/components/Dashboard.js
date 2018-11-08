import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../actions/userActions';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  onDeleteClick = (id) => {
    this.props.deleteUser(id);
  };

  render() {
    const { users } = this.props.user;
    return(
      <Container>
        <ListGroup>
          <TransitionGroup className="dashboard">
            {users.map(({ _id, name, picture, description }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this, _id)}
                >&times;
                </Button>
                <div>{name}</div>
                <div>{picture}</div>
                <div>{description}</div>
                <div>
                  <Button
                    className="edit-btn"
                    color="secondary"
                    size="sm"
                  >Edit
                  </Button>
                </div>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

Dashboard.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { getUsers, deleteUser })(Dashboard);
