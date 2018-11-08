import uuid from 'uuid';
import { GET_USERS, ADD_USER, DELETE_USER, USERS_LOADING } from '../actions/types';

const initialState = {
  users: [],
  loading: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state
      };
      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.payload)
        };
      case ADD_USER:
        return {
          ...state,
          users: [action.payload, ...state.users]
        }
      default:
        return state;
  }
}
