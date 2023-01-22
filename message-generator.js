

const DATA = 
{
  'size': ['mame', 'shohin', 'kifu sho', 'chu'],
  'type': ['broadleaf evergreen', 'broadleaf deciduous', 'coniferous evergreen', 'coniferous deciduous'],
  'style': ['Bunjingi', 'Sokan', 'Kengai', 'Moyogi'],
}

const rand = () => Math.trunc(Math.random() * 4)

function chooseATree()
{
  let size = DATA.size[rand()]
  let type = DATA.type[rand()]
  let style = DATA.style[rand()]
  
  return `Make me a ${size} bonsai with a ${type} species in the ${style} style.`
}

chooseATree()

