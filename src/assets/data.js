import fetch from 'isomorphic-fetch'
const url = `https://0a8yvnc556.execute-api.us-east-1.amazonaws.com/dev/proxy`

export const data = () => {
  const deferred = new Promise((resolve, reject) => {
    return fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({})
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'proxy request success') {
          // console.log(res.data)
          // console.log(JSON.parse(res.data[0]))
          const body1 = JSON.parse(res.data[0])
          const body2 = JSON.parse(res.data[1])
          // console.log('1', body1)
          // console.log('2', body2)
          body1.map(x => {
            body2.map(y => {
              if (x.id === y.ideaId) {
                // console.log(y)
                x.amountSpent = Number(y.amountFunded)
                // console.log(x)
              } else {
                x.amountSpent = 0
              }
              // console.log('ss', x)
            })
          })
          // body1[0].amountSpent = Number(body2.amountSpent)
          // body1[1].amountSpent = 0
          // body1[2].amountSpent = 0

          resolve(body1)
        }
      })
      .catch(err => console.log(err))
  })
  return deferred
}
