import { combineReducers } from "redux"

import blockchainReducer from "./blockchain-reducer"

const mainReducer = combineReducers({
  blockchainReducer
})

export default mainReducer
