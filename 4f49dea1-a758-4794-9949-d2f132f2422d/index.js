const fetch = require('node-fetch');

const handle = async (context) => {
  try {
    const chuckNorrisApiUrl = 'https://api.chucknorris.io/jokes/random';
    const sentimentAnalysisApiUrl =
      'https://api.deepai.org/api/sentiment-analysis';

    // Retrieve a random Chuck Norris joke from API
    const responseChuckNorrisApi = await fetch(chuckNorrisApiUrl);
    const resultChuckNorrisApi = await responseChuckNorrisApi.json();

    // Determine the mood of the Chuck Norris joke using Sentiment Analysis API
    const optionsSentimentAnalysisApi = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: resultChuckNorrisApi.value,
      }),
    };

    
     const sentimentApiKey="INSERT YOUR SENTIMENT ANALYSIS API KEY HERE";
    
     if (!sentimentApiKey) {
       throw new Error('Missing Sentiment Analysis API key');
     }

     optionsSentimentAnalysisAPI.headers['api-key'] = sentimentApiKey;

    

     

      
        

        
       
        
    
    
   

  
     
    

    
   
 

     

   
   let responseBody=null;
  

     
      
      
      
          console.log(optionsSentimentAnalysisAPI);

          

           if(sentimentApiKey){

            let responseSentimentAnalysisAPI=  await fetch(
                sentimentAnalysisApiUrl, optionsSentimentAnalysisAPI
              );

            

            
              
                        console.log(responseBody);
             let result=await responseSentimentAnalysisAPI.json();
             
              
            
              responseBody={mood:result.output};
             }
                else{
                  throw new Error("No api key for Sentient analysis found")
                 }

   
    // Construct the response object with the Chuck Norris joke and its mood
    const response = {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        joke: resultChuckNorrisApi.value,
        mood: responseBody.mood,
      }),
    };

    return response;
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

module.exports = { handle };
