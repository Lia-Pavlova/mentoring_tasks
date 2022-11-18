const requestURL = 'https://jsonplaceholder.typicode.com/todos'

const xhr = new XMLHttpRequest()

xhr.open('GET', requestURL)

xhr.responseType = 'json'

xhr.onload = () => {
  if (xhr.status >= 400) {
    console.error(xhr.response)
  } else {
    console.log(xhr.response)
  }
}

xhr.onerror = () => {
  console.log(xhr.response)
}

xhr.send()

// const body = {
//   name: 'Lia',
//   tasks: 20,
// }

// xhr.open('POST', requestURL, body)

// xhr.responseType = 'json'
// xhr.setRequestHeader('Content-Type', 'application/json')

// xhr.onload = () => {
//   if (xhr.status >= 400) {
//     console.error(xhr.response)
//   } else {
//     console.log(xhr.response)
//   }
// }

// xhr.onerror = () => {
//   console.log(xhr.response)
// }

// xhr.send(JSON.stringify(body))
