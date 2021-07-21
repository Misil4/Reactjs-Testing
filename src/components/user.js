const  user = {
    text: 'Barca',
    author: {
      names: ['Pique','Messi','Busquets','Jordi'],
      ages: [34,34,33,32]
    }
  }
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
module.exports = {user,getRandomInt};