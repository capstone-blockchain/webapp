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

import { getBlockchain } from "../../redux/actions/blockchain-action"

class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getBlockchain())
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
                      <div>
                        <b>Temperature: </b> <span>50 Celcius</span>
                      </div>
                      <div>
                        <b>Humidity: </b> <span>40 %</span>
                      </div>
                    </CardText>
                    <hr />
                    <CardText>
                      <div>
                        <b>Date: </b> <span>{v.timestamp}</span>
                      </div>
                      <div>
                        <b>Hash: </b> <span>{v.hash}</span>
                      </div>
                      <div>
                        <b>Previous hash: </b> <span>{v.previousHash}</span>
                      </div>
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

export default connect(select)(Home)
