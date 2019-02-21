import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// react plugin used to create charts
import { Line, Bar, Doughnut } from 'react-chartjs-2'

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from 'reactstrap'

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from '../variables/charts.jsx'

import { dataT } from '../assets/dataT.js'

// export const dataT = [
//   {
//     IdeaTitle: 'Lessons learned from the San Jose Public Street Light Project',
//     Author: 'Tony Barrile',
//     Votes: '478',
//     TokensAwarded: '1230',
//     link: 'http://ideas.buildcoinfoundation.org/a/dtd/350469-45889'
//   },
//   {
//     IdeaTitle: 'AMA encourages the use of 3000K or lower lighting',
//     Author: 'Dennis Stone',
//     Votes: '345',
//     TokensAwarded: '560',
//     link: 'http://ideas.buildcoinfoundation.org/a/dtd/349475-45889'
//   },
//   {
//     IdeaTitle: 'LED Street Lights in the Netherlands',
//     Author: 'David Stout',
//     Votes: '236',
//     TokensAwarded: '321',
//     link: 'http://ideas.buildcoinfoundation.org/a/dtd/349381-45889'
//   }
// ]

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bigChartData: 'data1'
    }
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    })
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="6">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Tokens Allocated</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" /> 5000
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Doughnut
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            {/* <Row> */}
            <Col lg="6">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Campaign</h5>
                      <CardTitle tag="h2">Idea</CardTitle>
                    </Col>
                    <Col sm="6" />
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area" style={{ padding: '10px' }}>
                    <p>
                      The range of LED color temperatures should be 3000K to
                      4300K, and is based on study of visibility and preference.
                      In the Advanced Street Lighting Technologies Assessment
                      Project for the City of San José (2010), it was found that
                      while higher color temperature LEDs are more efficient,
                      subjectively, participants generally preferred lower color
                      temperature LEDs. There are also concerns from the
                      astronomy community about the presence of blue wavelengths
                      in higher color temperature light sources.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            {/* </Row> */}
            <Col lg="12">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Votes and Tokens Awarded</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-delivery-fast text-primary" />{' '}
                    {/* 3,500€ */}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {/* bbb */}

          {/* bbb */}
          <Row>
            {/* <Col lg="6" md="12" /> */}

            <Col lg="12" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">All Ideas</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Idea Title</th>
                        <th>Author</th>
                        <th>Votes</th>
                        <th className="text-center">Tokens Awarded</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataT.map(x => {
                        return (
                          <tr>
                            <td>
                              <a href={x.link}>{x.IdeaTitle}</a>
                            </td>
                            <td>{x.Author}</td>
                            <td>{x.Votes}</td>
                            <td className="text-center">{x.TokensAwarded}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

export default Dashboard
