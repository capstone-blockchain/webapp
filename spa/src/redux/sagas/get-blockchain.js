import { call, put } from "redux-saga/effects"

import baseService from "./baseService"
import { DISPLAY_BLOCKCHAIN } from "../actions/types"

export function* getBlockchain(action) {
  try {
    const data = yield call(upload, action)
    yield put({ type: DISPLAY_BLOCKCHAIN, data })
  } catch (e) {}
}

function upload(action) {
  return new Promise((resolve, reject) => {
    baseService("GET", "/blockchain")
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.message)
      })
  })
}
