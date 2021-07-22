const  user = {
    text: 'Amigos',
    author: {
      names: ['Eneko','Xabi','Imanol','Aritz'],
      ages: [34,34,33,32]
    }
  }
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
module.exports = {user,getRandomInt};