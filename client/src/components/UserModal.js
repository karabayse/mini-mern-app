import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addUser } from '../actions/userActions';

class UserModal extends Component {
  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value,
       [e.target.picture]: e.target.value,
       [e.target.description]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      picture: this.state.picture,
      description: this.state.description
    };

    // Add user via addUser action
    this.props.addUser(newUser);
    // Close modal
    this.toggle();
  }

  render() {
    return(
      <div>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={this.toggle}
          >
          Add User
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          >
          <ModalHeader toggle={this.toggle}>Add User To Dashboard</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="user">New User</Label>
                <Input
                  type="text"
                  name="name"
                  id="user"
                  placeholder="User Name"
                  onChange={this.onChange}
                />
                <Input
                  type="file"
                  picture="picture"
                  id="user"
                  placeholder="Picture"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  description="description"
                  id="user"
                  placeholder="Description"
                  onChange={this.onChange}
                />
                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
                  >Add User</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { addUser })(UserModal);
