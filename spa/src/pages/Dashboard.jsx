import React, { Component } from "react"
import { Line } from "react-chartjs-2"
import { connect } from "react-redux"

import { getDatasetForDashboard } from "../redux/actions/blockchain-action"

const option = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
}

class Dashboard extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getDatasetForDashboard())
  }

  render() {
    const { reducer } = this.props
    return (
      <div className="container-fluid">
        <h3 className="title">Station 1</h3>
        {reducer.datasetStation1.length > 0 ? (
          <Line
            data={{
              labels: reducer.datetime,
              datasets: reducer.datasetStation1
            }}
            option={option}
            height={50}
          />
        ) : null}
        <h3 className="title">Station 2</h3>
        {reducer.datasetStation2.length > 0 ? (
          <Line
            data={{
              labels: reducer.datetime,
              datasets: reducer.datasetStation2
            }}
            option={option}
            height={50}
          />
        ) : null}
        <h3 className="title">Station 3</h3>
        {reducer.datasetStation3.length > 0 ? (
          <Line
            data={{
              labels: reducer.datetime,
              datasets: reducer.datasetStation3
            }}
            option={option}
            height={50}
          />
        ) : null}
      </div>
    )
  }
}

function select(state) {
  return { reducer: state.blockchainReducer }
}

export default connect(select)(Dashboard)
