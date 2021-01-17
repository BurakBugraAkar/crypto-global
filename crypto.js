const superagent = require('superagent')

module.exports = {
  name: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
let name = body.name
   return name
  },

  price: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
let price = body.price
   return price
  },

  percent: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
let percent = body.percent
   return percent
  },
  
  icon: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
let icon = body.icon
   return icon
  },

  all: async function(kelime) {
    let {body} = await superagent     
    .get(`https://crypto.fiobrum.repl.co/${encodeURI(kelime)}`);
    let name = body.name
    let price = body.price
    let percent = body.percent
    let icon = body.icon
    let allone = {
        name: name,
        price: price,
        percent: percent,
        icon: icon
    } 
   return allone
  },
};