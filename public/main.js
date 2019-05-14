let apiKey = '1bc4af68af30f0969254cdf4fbd7fcec'

// let city-name = 'us'

const getForecastByZip = () => {
  const id = document.querySelector('input').value
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      id +
      '&APPID=01442925e2014b7421bca4fdc5ca55eb&units=imperial'
  )
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(json => {
      document.querySelector('.temperature').textContent = json.main.temp
      console.log(json)
      // console.log(json.main.temp)
    })
}

const main = () => {
  console.log('started')
  getForecastByZip()
}
document.querySelector('.get').addEventListener('click', getForecastByZip)
// document.addEventListener('DOMContentLoaded', main)
