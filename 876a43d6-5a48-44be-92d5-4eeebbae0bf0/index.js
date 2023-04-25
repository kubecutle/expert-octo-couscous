const axios = require('axios');

const handle = async (context) => {
  const response1 = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
  const response2 = await axios.get('https://api.chucknorris.io/jokes/random');

  return {
    postTitle: response1.data.title,
    chuckNorrisJoke: response2.data.value
  }
}

module.exports = { handle };
