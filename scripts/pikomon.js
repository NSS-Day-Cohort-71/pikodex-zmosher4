import { getData } from './database.js';
const pokemans = getData();

export const pikomonList = () => {
  return pokemans.map(
    (poke) => `
    <ul class="piko-card piko-info">
    <img class="piko-img" src=".././${poke.imageUrl}" alt="${poke.name}" />
    <h2 class="piko-name">${poke.name}</h2>
    <div class="info-text">
    <p class="piko-category">Category: ${poke.category}</p>
    <p class="piko-abilities">Abilities: ${poke.abilities}</p>
    <p class="piko-weakness">Weakness: ${poke.weakness}</p>
    </div>
    </ul>
    
    `
  );
};
