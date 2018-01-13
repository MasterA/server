import { MODAL } from '../actions/types';

export default function(state = { open: false }, action) {
  switch(action.type) {
    case MODAL:
      return action.payload;
    default:
      return state;
  }
}
