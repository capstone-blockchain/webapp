import { DISPLAY_BLOCKCHAIN, RECEIVED_NEW_BLOCK } from "../actions/types"

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

    case RECEIVED_NEW_BLOCK:
      const blockchain = state.blockchain
      const latestBlock = blockchain[blockchain.length - 1]

      if (latestBlock.index === action.block.index) {
        return state
      } else {
        blockchain.push(action.block)
        return Object.assign({}, state, {
          blockchain
        })
      }

    default:
      return state
  }
}
