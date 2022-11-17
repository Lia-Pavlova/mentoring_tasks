const requestURL = 'https://jsonplaceholder.typicode.com/todos/1'

function sendRequest(method, url) {

  return fetch(url).then(response => {
  
      return response.json()
    }

  )
}

sendRequest('GET', requestURL)
  .then(data => console.log(data))
  .catch(err => console.log(err))


