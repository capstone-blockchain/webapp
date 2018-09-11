import {
  GET_BLOCKCHAIN,
  GET_BLOCKCHAIN_DATASET,
  RECEIVED_NEW_BLOCK
} from "./types"

export function getBlockchain() {
  return {
    type: GET_BLOCKCHAIN
  }
}

export function getDatasetForDashboard() {
  return {
    type: GET_BLOCKCHAIN_DATASET
  }
}

export function getNewBlock(block) {
  return {
    type: RECEIVED_NEW_BLOCK,
    block
  }
}
