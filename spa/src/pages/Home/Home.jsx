import React, { Component } from "react"
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

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" className="navigation-bar">
          <NavbarBrand href="/">Agriculture with blockchain</NavbarBrand>
        </Navbar>
        <div className="container-fluid">
          <Row>
            {[1, 2, 3, 4, 5, 6].map(v => (
              <Col md={3}>
                <Card className="block">
                  <CardBody>
                    <CardTitle className="index">{v}</CardTitle>
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
                        <b>Date: </b> <span>02-07-2018 00:00:00</span>
                      </div>
                      <div>
                        <b>Hash: </b> <span>79GJKGH98790</span>
                      </div>
                      <div>
                        <b>Previous hash: </b> <span>79GJKGH98790</span>
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

export default Home
