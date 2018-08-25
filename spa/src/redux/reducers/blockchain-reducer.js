import { DISPLAY_BLOCKCHAIN } from "../actions/types"

export default function blockchainReducer(
  state = {
    blockchain: []
  },
  action
) {
  switch (action.type) {
    case DISPLAY_BLOCKCHAIN:
      return Object.assign({}, state, {
        blockchain: action.data
      })

    default:
      return state
  }
}
