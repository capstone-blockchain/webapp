import { GET_BLOCKCHAIN, RECEIVED_NEW_BLOCK } from "./types"

export function getBlockchain() {
  return {
    type: GET_BLOCKCHAIN
  }
}

export function getNewBlock(block) {
  return {
    type: RECEIVED_NEW_BLOCK,
    block
  }
}
