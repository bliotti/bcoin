import React from 'react'
// react plugin used to create charts
import { Bar, Doughnut } from 'react-chartjs-2'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from 'reactstrap'

// core components
import { chartExample2, chartExample3 } from '../variables/charts.jsx'
import { dataT } from '../assets/dataT.js'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bigChartData: 'data1',
      dataT: []
    }
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    })
  }
  componentWillMount() {
    dataT().then(r => this.setState({ dataT: r }))
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="6">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">% of Tokens Allocated</h5>
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

            <Col lg="6">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category" />
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

          <Row>
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
                      {this.state.dataT.map((x, i) => {
                        console.log(x)
                        return (
                          <tr key={i}>
                            <td>
                              <a href={x.url}>{x.title}</a>
                            </td>
                            <td>{x.authorInfo.name}</td>
                            <td>{x.voteCount}</td>
                            <td className="text-center">{0}</td>
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
