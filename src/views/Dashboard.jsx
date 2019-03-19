/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from 'reactstrap'
import { getChartOptions } from '../variables/charts.jsx'
import { data } from '../assets/data'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bigChartData: 'data1',
      data: [],
      doughNutChartOptions: null,
      barChartOptions: null,
      activeIdea: 0
    }
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    })
  }
  componentWillMount() {
    data().then(r => this.setState({ data: r }))
    getChartOptions().then(res => {
      this.setState({
        doughNutChartOptions: res.doughNutChartOptions,
        barChartOptions: res.barChartOptions
      })
    })
  }
  handleIdeaClick = (e, i) => {
    e.preventDefault()
    this.setState({ activeIdea: i })
  }

  render() {
    const { activeIdea, data } = this.state
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="12">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h4">% of Tokens Allocated</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    {this.state.doughNutChartOptions &&
                      this.state.doughNutChartOptions.data && (
                        <Doughnut
                          data={this.state.doughNutChartOptions.data}
                          options={this.state.doughNutChartOptions.options}
                        />
                      )}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h4">Votes and Tokens Awarded</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    {this.state.barChartOptions &&
                      this.state.barChartOptions.data && (
                        <Bar
                          data={this.state.barChartOptions.data}
                          options={this.state.barChartOptions.options}
                        />
                      )}
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="12" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Ideas</CardTitle>
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
                      {this.state.data
                        .sort((a, b) => {
                          return b.amountSpent - a.amountSpent
                        })
                        .map((x, i) => {
                          // console.log('sasa', x)
                          return (
                            <tr key={i}>
                              <td>
                                <a
                                  href={'#'}
                                  name={i}
                                  onClick={e => this.handleIdeaClick(e, i)}
                                >
                                  {x.title}
                                </a>
                              </td>
                              <td>{x.authorInfo.name}</td>
                              <td>{x.voteCount}</td>
                              <td className="text-center">{x.amountSpent}</td>
                            </tr>
                          )
                        })}
                    </tbody>
                  </Table>
                  <div className="chart-area" style={{ padding: '10px' }}>
                    <p style={{ minHeight: '150px' }}>
                      {this.state &&
                        this.state.data[0] &&
                        this.state.data[activeIdea].text}
                    </p>
                  </div>
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
