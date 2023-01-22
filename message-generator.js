/* 
TOPIC - bonsai style to try
INPUT - none (just produce a style when program is run. may update with inputs on form in HTML later)
OUTPUT - tree style, tree size, type (broadleaf evergreen, broadleaf deciduous, coniferous evergreen, coniferous deciduous)
DATA
an object with style, size, and type keys.  they contain arrays of 4 different versions to choose from
FUNCITONS
1. random number generator
    -- to choose style size and type
    -- should have 4 each for simplicity
2. output statment constructor
    -- use random function to pick from each of the three categories
    -- combines selections into output statement describing the chosen bonsai
*/

const DATA = 
{
  'size': ['mame', 'shohin', 'kifu sho', 'chu'],
  'type': ['broadleaf evergreen', 'broadleaf deciduous', 'coniferous evergreen', 'coniferous deciduous'],
  'style': ['Bunjingi', 'Sokan', 'Kengai', 'Moyogi'],
}

const rand = () => Math.trunc(Math.random() * 4)

function canYouMake()
{
  let size = DATA.size[rand()]
  let type = DATA.type[rand()]
  let style = DATA.style[rand()]
  return `Make me a ${size} bonsai with a ${type} species in the ${style} style.`
}

console.log(canYouMake())


/* 
// example solution
function generateRandomNumber(num) {
  // Gets # from 0 -> num - 1
  return Math.floor(Math.random() * num)
}

const collectiveWisdom = {
  signInfo: ['star', 'moon', 'sun', 'comet'],
  fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
  advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
}

// Store the 'wisdom' in an array
let personalWisdom = []

// Iterate over the object
for(let prop in collectiveWisdom) {
  let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)

  // use the object's properties to customize the message being added to personalWisdom  
  switch(prop) {
    case 'signInfo':
      personalWisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`)
      break
    case 'fortuneOutput':
      personalWisdom.push(`You are having: "${collectiveWisdom[prop][optionIdx]}".`)
      break
    case 'advice':
      personalWisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`)
      break
    default:
      personalWisdom.push('There is not enough info.')
  }
}

function formatWisdom(wisdom) {
  // Add some ASCII here?
  // Add in more symbols to the array? like emojies or what not?
  const formatted = personalWisdom.join('\n')
  console.log(formatted)
}

formatWisdom(personalWisdom);
 */










