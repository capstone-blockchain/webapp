import {
  DISPLAY_BLOCKCHAIN,
  DISPLAY_BLOCKCHAIN_DATASET,
  RECEIVED_NEW_BLOCK
} from "../actions/types"
import { chartDataset } from "../../data-template"
import moment from "moment-timezone"

export default function blockchainReducer(
  state = {
    blockchain: [],
    datetime: [],
    datasetStation1: [],
    datasetStation2: [],
    datasetStation3: []
  },
  action
) {
  switch (action.type) {
    case DISPLAY_BLOCKCHAIN:
      return Object.assign({}, state, {
        blockchain: action.data
      })

    case DISPLAY_BLOCKCHAIN_DATASET:
      return Object.assign({}, state, {
        datetime: action.data.map(block =>
          moment(block.timestamp)
            .tz("Asia/Ho_Chi_Minh")
            .format("MMMM Do YYYY, h:mm:ss a")
        ),
        datasetStation1: [
          chartDataset(
            "Temperature (Celcius)",
            "transparent",
            "red",
            action.data.map(block => block.data.substring(0, 2))
          ),
          chartDataset(
            "Humidity (%)",
            "transparent",
            "green",
            action.data.map(block => block.data.substring(2, 4))
          )
        ],
        datasetStation2: [
          chartDataset(
            "Temperature (Celcius)",
            "transparent",
            "red",
            action.data.map(block => block.data.substring(4, 6))
          ),
          chartDataset(
            "Humidity (%)",
            "transparent",
            "green",
            action.data.map(block => block.data.substring(6, 8))
          )
        ],
        datasetStation3: [
          chartDataset(
            "Temperature (Celcius)",
            "transparent",
            "red",
            action.data.map(block => block.data.substring(8, 10))
          ),
          chartDataset(
            "Humidity (%)",
            "transparent",
            "green",
            action.data.map(block => block.data.substring(10, 12))
          )
        ]
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
