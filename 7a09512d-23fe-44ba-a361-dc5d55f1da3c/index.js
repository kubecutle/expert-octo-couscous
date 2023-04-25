an help you with that. Here's an example nodejs API that integrates the OpenWeatherMap API and the NewsAPI to provide weather information and news based on a user's location:

```
nodejs
const axios = require('axios');

const handle = async (context) => {
  const { location } = context.query || {};
  
  if (!location) {
    return { statusCode: 400, statusMessage: 'Location parameter is required' };
  }
  
  try {
    // Get weather data from OpenWeatherMap API
    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=<OPENWEATHERMAP_API_KEY>&units=metric`);
    const { temp } = weatherResponse.data.main;
    
    // Get top headlines from NewsAPI
    const newsResponse = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=<NEWSAPI_API_KEY>`);
    
    // Construct API response object
    const responseObj = {
      location,
      temperature: `${temp}°C`,
      articles: []
    };
    
    for (const article of newsResponse.data.articles) {
      responseObj.articles.push({
        title: article.title,
        description: article.description,
        url: article.url,
        imageUrl: article.urlToImage
      });
      
      if (responseObj.articles.length === 5) break; // Limit to top five articles
    }
    
     return { body :JSON.stringify(responseObj), statusCode :200}
     
   } catch (error) {

       console.error(error);
       return { statusCode :500, statusMessage :"Something went wrong", error }

   }
};

module.exports = { handle };

