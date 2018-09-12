import React, { Component } from "react"
import { CardText, Col } from "reactstrap"

class Station extends Component {
  render() {
    const { temp, humidity } = this.props
    return (
      <Col>
        <CardText>
          <b>Temp: </b> <span>{temp} Celcius</span>
        </CardText>
        <CardText>
          <b>Humidity: </b> <span>{humidity} %</span>
        </CardText>
      </Col>
    )
  }
}

export default Station
