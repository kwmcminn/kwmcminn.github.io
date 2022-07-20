const salary = 340000
const secondsInAYear = 31536000
const moneyPerSecond = salary / secondsInAYear

function queueMoneySong(){
  $('#money-gif').on('click', () => {
    const moneySong = document.getElementById("money-song");
    console.log(moneySong)
    moneySong.play()
  })
}


function formatMoney(amount){
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(amount);
}

function updateMoney(){
  const moneyText = $('#amount-display')
  const moneyTextValue = moneyText.text()
  const newMoneyValue = formatMoney(Number(moneyTextValue.replace('$','').replace(',','')) + moneyPerSecond)

  moneyText.text(newMoneyValue)
}

function getStartingAmount(){
  const startingTimeSeconds = new Date('2022-06-20T07:09:00').valueOf()
  const timeNow = Date.now()
  const secondsSinceStart = (timeNow - startingTimeSeconds) / 1000
  const moneySinceStart = secondsSinceStart * moneyPerSecond

  const moneyText = $('#amount-display')
  moneyText.text(formatMoney(moneySinceStart))
}

$(document).ready(() => {
  getStartingAmount()
  queueMoneySong()
  setInterval(() => {
    updateMoney()
  }, 1000)
})