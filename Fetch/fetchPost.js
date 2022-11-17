const reqURL = 'https://jsonplaceholder.typicode.com/todos'

function sendRequest(method, url, body = null) {
  const headers = {
    'Content-Type': 'application/json'
  }

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    if (response.ok) {
      return response.json()
    }

    return response.json().then(error => {
      const e = new Error('Something wrong')
      e.data = error
      throw e
    })
  })
}

const body = {
  name: 'Lia',
  tasks: 20
}

sendRequest('POST', reqURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))

