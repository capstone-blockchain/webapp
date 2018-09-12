import React, { Component } from "react"
import { connect } from "react-redux"
import { Row, Col, Card, CardText, CardBody, CardTitle } from "reactstrap"
import { socketConnect } from "socket.io-react"
import moment from "moment-timezone"

import { getBlockchain, getNewBlock } from "../redux/actions/blockchain-action"

import Station from "./Station.jsx"

class Home extends Component {
  componentDidMount() {
    const { dispatch, socket } = this.props
    dispatch(getBlockchain())
    socket.on("newBlock", data => {
      dispatch(getNewBlock(data))
    })
  }

  render() {
    const { reducer } = this.props
    return (
      <div>
        <div className="container-fluid">
          <Row>
            {reducer.blockchain.map(v => (
              <Col md={3} key={v.index}>
                <Card className="block">
                  <CardBody>
                    <CardTitle className="index">{v.index}</CardTitle>
                    <hr />
                    <Row>
                      <Station
                        temp={v.data.substring(0, 2)}
                        humidity={v.data.substring(2, 4)}
                        station="Station 1"
                      />
                      {/* <Station
                        temp={v.data.substring(4, 6)}
                        humidity={v.data.substring(6, 8)}
                        station="Station 2"
                      />
                      <Station
                        station="Station 3"
                        temp={v.data.substring(8, 10)}
                        humidity={v.data.substring(10, 12)}
                      /> */}
                    </Row>
                    <hr />

                    <CardText>
                      <b>Date: </b>{" "}
                      <span>
                        {moment(v.timestamp)
                          .tz("Asia/Ho_Chi_Minh")
                          .format("MMMM Do YYYY, h:mm:ss a")}
                      </span>
                    </CardText>
                    <CardText>
                      <b>Hash: </b> <span>{v.hash}</span>
                    </CardText>
                    <CardText>
                      <b>Previous hash: </b> <span>{v.previousHash}</span>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    )
  }
}

function select(state) {
  return { reducer: state.blockchainReducer }
}

export default connect(select)(socketConnect(Home))
