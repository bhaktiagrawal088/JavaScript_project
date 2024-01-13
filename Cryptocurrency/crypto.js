let btc = document.getElementById('bitcoin')
let en = document.getElementById('ethereum')
let dc = document.getElementById('dogecoin')

let setting = {
    'async' : 'true',
    'scrossDomain' : 'true',
    'url' : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    'method' : 'GET',
    'header' : {}
}
$.ajax(setting).done(function(response){
    //do something with the response here.
    btc.innerHTML = response.bitcoin.usd;
    en.innerHTML = response.ethereum.usd;
    dc.innerHTML = response.dogecoin.usd;
})