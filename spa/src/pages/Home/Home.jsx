import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Navbar,
  NavbarBrand,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap"
import { socketConnect } from "socket.io-react"

import {
  getBlockchain,
  getNewBlock
} from "../../redux/actions/blockchain-action"

const genesisBlock = "my genesis block!!"

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
        <Navbar color="dark" dark expand="md" className="navigation-bar">
          <NavbarBrand href="/">Agriculture with blockchain</NavbarBrand>
        </Navbar>
        <div className="container-fluid">
          <Row>
            {reducer.blockchain.map(v => (
              <Col md={3} key={v.index}>
                <Card className="block">
                  <CardBody>
                    <CardTitle className="index">{v.index}</CardTitle>
                    <hr />
                    <CardText>
                      <b>Temperature: </b>{" "}
                      <span>
                        {v.data === genesisBlock ? 0 : v.data.substring(0, 2)}{" "}
                        Celcius
                      </span>
                    </CardText>
                    <CardText>
                      <b>Humidity: </b>{" "}
                      <span>
                        {v.data === genesisBlock ? 0 : v.data.substring(2)} %
                      </span>
                    </CardText>

                    <hr />

                    <CardText>
                      <b>Date: </b> <span>{v.timestamp}</span>
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
