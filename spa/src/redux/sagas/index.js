import { takeEvery } from "redux-saga/effects"

import { GET_BLOCKCHAIN, GET_BLOCKCHAIN_DATASET } from "../actions/types"
import { getBlockchain, getBlockchainDataset } from "./get-blockchain"

function* rootSaga() {
  yield takeEvery(GET_BLOCKCHAIN, getBlockchain)
  yield takeEvery(GET_BLOCKCHAIN_DATASET, getBlockchainDataset)
}

export default rootSaga
