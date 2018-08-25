import { takeEvery } from "redux-saga/effects"

import { GET_BLOCKCHAIN } from "../actions/types"
import { getBlockchain } from "./get-blockchain"

function* rootSaga() {
  yield takeEvery(GET_BLOCKCHAIN, getBlockchain)
}

export default rootSaga
