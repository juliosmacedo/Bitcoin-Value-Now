const app = document.getElementById('root')
var request = new XMLHttpRequest()
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

request.open('GET', 'https://api.coinlore.net/api/ticker/?id=90', true)


request.onload = function () {
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(data => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = data.price_usd + " USD";

      const p = document.createElement('p')
      p.textContent = "24h fluctuation: " + data.percent_change_24h + "%";

      const h5 = document.createElement('h5')
      h5.textContent = new Date();

      const h4 = document.createElement('h4')
      h4.textContent = "Value fetched from CoinLore.com"

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
      card.appendChild(h5)
      card.appendChild(h4)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}


request.send()