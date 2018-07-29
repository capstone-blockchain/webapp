import { GET_CHOSEN_ADMIN_PROJECT, UPDATE_CHOSEN_PROJECT } from '../actions/types';

export default function projectReducer(state = {
  project: {}
}, action) {
  switch (action.type) {
    case GET_CHOSEN_ADMIN_PROJECT:
      return Object.assign({}, state, {
        project: action.project
      })
    default:
      return state
  }
}