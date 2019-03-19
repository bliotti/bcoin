import { data } from '../assets/data'

const options = {
  maintainAspectRatio: false,
  legend: {
    display: true,
    position: 'bottom',
    reverse: false
  },
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  responsive: true
}

const scales = {
  yAxes: [
    {
      gridLines: {
        drawBorder: false,
        color: 'rgba(225,78,202,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 60,
        suggestedMax: 160,
        padding: 20,
        fontColor: '#9e9e9e'
      },
      position: 'left',
      id: 'y-axis-1'
    },

    {
      gridLines: {
        drawBorder: false,
        color: 'rgba(225,78,202,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 10,
        padding: 20,
        fontColor: '#9e9e9e'
      },
      position: 'right',
      id: 'y-axis-2'
    }
  ],
  xAxes: [
    {
      gridLines: {
        drawBorder: false,
        color: 'rgba(225,78,202,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9e9e9e'
      }
    }
  ]
}

export const getChartOptions = () =>
  data().then(data => {
    return {
      doughNutChartOptions: {
        data: canvas => {
          let ctx = canvas.getContext('2d')
          let gs = ctx.createLinearGradient(0, 230, 0, 50)
          gs.addColorStop(1, 'rgba(29,140,248,0.2)')
          gs.addColorStop(0.4, 'rgba(29,140,248,0.0)')
          gs.addColorStop(0, 'rgba(29,140,248,0)')

          return {
            labels: data
              .sort((a, b) => {
                return b.amountSpent - a.amountSpent
              })
              .map(x => x.authorInfo.name),
            datasets: [
              {
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                data: data
                  .sort((a, b) => {
                    return b.amountSpent - a.amountSpent
                  })
                  .map(x => x.voteCount)
              }
            ]
          }
        },
        options
      },

      barChartOptions: {
        data: canvas => {
          let ctx = canvas.getContext('2d')
          let gs = ctx.createLinearGradient(0, 230, 0, 50)
          gs.addColorStop(1, 'rgba(72,72,176,0.1)')
          gs.addColorStop(0.4, 'rgba(72,72,176,0.0)')
          gs.addColorStop(0, 'rgba(119,52,169,0)') //purple colors

          return {
            labels: data
              .sort((a, b) => {
                return b.amountSpent - a.amountSpent
              })
              .map(x => {
                let v = x.title.substring(0, 16)
                return v[v.length - 1] === ' '
                  ? v.replace(/\s$/, '...')
                  : v.substring(0, v.lastIndexOf(' ')).concat('...')
              }),
            datasets: [
              {
                label: 'Votes',
                fill: true,
                backgroundColor: '#FF6384', // ['#FF6384', '#36A2EB', '#FFCE56'], //backgroundColor: gradientStroke,
                hoverBackgroundColor: gs,
                borderColor: '#f5f5f5',
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                data: data
                  .sort((a, b) => {
                    return b.amountSpent - a.amountSpent
                  })
                  .map(x => x.voteCount),
                yAxisID: 'y-axis-1'
              },
              {
                label: 'Tokens Awarded',
                fill: true,
                backgroundColor: '#36A2EB', // ['#FF6384', '#36A2EB', '#FFCE56'], //backgroundColor: gradientStroke,
                hoverBackgroundColor: gs,
                borderColor: '#f5f5f5',
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                data: data.map(x => x.amountSpent),
                yAxisID: 'y-axis-2'
              }
            ].reverse()
          }
        },
        options: {
          ...options,
          scales
        }
      }
    }
  })
