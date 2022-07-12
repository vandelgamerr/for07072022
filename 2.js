
// Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, 
// mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número 
// introducido por el usuario.

// Declarar Array de Pokemones
var pokemons = 
[ 'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran-f',
  'nidorina',
  'nidoqueen',
  'nidoran-m',
  'nidorino',
  'nidoking',
  'clefairy',
  'clefable',
  'vulpix',
  'ninetales',
  'jigglypuff',
  'wigglytuff',
  'zubat',
  'golbat',
  'oddish',
  'gloom',
  'vileplume',
  'paras',
  'parasect',
  'venonat',
  'venomoth',
  'diglett',
  'dugtrio',
  'meowth',
  'persian',
  'psyduck',
  'golduck',
  'mankey',
  'primeape',
  'growlithe',
  'arcanine',
  'poliwag',
  'poliwhirl',
  'poliwrath',
  'abra',
  'kadabra',
  'alakazam',
  'machop',
  'machoke',
  'machamp',
  'bellsprout',
  'weepinbell',
  'victreebel',
  'tentacool',
  'tentacruel',
  'geodude',
  'graveler',
  'golem',
  'ponyta',
  'rapidash',
  'slowpoke',
  'slowbro',
  'magnemite',
  'magneton',
  'farfetchd',
  'doduo',
  'dodrio',
  'seel',
  'dewgong',
  'grimer',
  'muk',
  'shellder',
  'cloyster',
  'gastly',
  'haunter',
  'gengar',
  'onix',
  'drowzee',
  'hypno',
  'krabby',
  'kingler',
  'voltorb' ];

  // Pedir el numero prompt
  numero = parseInt(prompt('Por favor introduce un numero'));

  if(Number.isInteger(numero)) {
    // Si numero es mayoy a la longitud del array entonces actualizar el valor de numero a la 
    // longitud del arreglo 
    if(numero > pokemons.length){
      numero = pokemons.length;
    }
  }


  // Si numero es mayoy a la longitud del array entonces actualizar el valor de numero a la 
  // longitud del arreglo 
  /*if(numero > pokemons.length){
    numero = pokemons.length;
  }*/

  // For desde 0 hasta numero
  for (var i = 0; i < numero; i++) {
    if(i % 5 == 0){
        console.log(pokemons[i]);
    }
  }
