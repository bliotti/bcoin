import fetch from 'isomorphic-fetch'
const url = `https://0a8yvnc556.execute-api.us-east-1.amazonaws.com/dev/proxy`

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

export const dataT = () => {
  const deferred = new Promise((resolve, reject) => {
    return fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({})
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'proxy request success') {
          resolve(JSON.parse(res.data))
        }
      })
      .catch(err => console.log(err))
  })
  return deferred
}
