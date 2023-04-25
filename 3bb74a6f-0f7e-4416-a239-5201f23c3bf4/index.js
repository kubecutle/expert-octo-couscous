const fetch = require('node-fetch');

const handle = async (context) => {
  try {
    const jokeResult = await fetch('https://official-joke-api.appspot.com/random_joke');
    const adviceResult = await fetch('https://api.adviceslip.com/advice');

    if (jokeResult.ok && adviceResult.ok) {
      const jokeJson = await jokeResult.json();
      const adviceJson = await adviceResult.json();

      return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "joke": `${jokeJson.setup} ${jokeJson.punchline}`,
          "advice": `${adviceJson.slip.advice}`
        }),
      };
    } else {
      throw new Error("Error fetching from one or more APIs.");
    }
  } catch (err) {
    context.log.error(err);
    return { 
      statusCode: err.status || 500, 
      body: JSON.stringify(err.message)
     };
  }
}

module.exports = { handle };
