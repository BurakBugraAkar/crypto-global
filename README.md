# crypto-global

```shell
npm install crypto-global
```

EN
A fast and stable module that provides information about crypto currencies.


```javascript
const crypto = require('crypto-global')
async function output() {
    unit = "btc"
    let name = await modül.name(unit)
    let price = await modül.price(unit)
    let percent = await modül.percent(unit)
    let icon = await modül.icon(unit)
    let all = await modül.all(unit)
    console.log(name)
    console.log(price)
    console.log(percent)
    console.log(icon)
    console.log(all)
}
output()

```npm
console.log(name) 
> Bitcoin(BTC)
```

/*/
console.log(all) 
>{
>  name: 'Bitcoin(BTC)',
>  price: '34,943.76',
>  percent: '-7.13',
>  icon: 'https://cdn.discordapp.com/attachments/774285169364172881/800012387742384128/bitcoin.png'
>}
/*/
```
