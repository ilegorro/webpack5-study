import './styles/index.css'

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
}

const elvenGauntlrtsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedStone: 4,
}

console.log(elvenShieldRecipe)
console.log(elvenGauntlrtsRecipe)
