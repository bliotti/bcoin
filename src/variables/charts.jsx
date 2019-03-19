import { dataT } from '../assets/dataT'

let dataTStatic = dataT().then(r => r) //?

// const dataTStatic = [
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

console.log(dataTStatic)

let doughNutChartOptions = {
  data: canvas => {
    let ctx = canvas.getContext('2d')
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50)
    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)')
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)')
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)') //blue colors

    return {
      labels: dataTStatic.map(x => x.Author), //['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [
        {
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          data: dataTStatic.map(x => x.Votes)
        }
      ]
    }
  },
  options: {
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
}

let barChartOptions = {
  data: canvas => {
    let ctx = canvas.getContext('2d')

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50)

    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)')
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)')
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)') //purple colors

    return {
      labels: dataTStatic.map(x => x.IdeaTitle.substring(0, 16)),
      datasets: [
        {
          label: 'Ideas',
          fill: true,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], //backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#d048b6',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: dataTStatic.map(x => x.TokensAwarded)
        }
      ]
    }
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
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
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: 'transparent'
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: '#9e9e9e'
          }
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
  }
}

export { doughNutChartOptions, barChartOptions }
