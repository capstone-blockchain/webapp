import React, { Component } from "react"
import { CardText, Col } from "reactstrap"

class Station extends Component {
  render() {
    const { humidity, temp, station } = this.props
    return (
      <Col md={4}>
        <p>{station}</p>
        <CardText>
          <b>Temp: </b> <span>{humidity} Celcius</span>
        </CardText>
        <CardText>
          <b>Humidity: </b> <span>{temp} %</span>
        </CardText>
      </Col>
    )
  }
}

export default Station
