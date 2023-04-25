e's a Node.js template that adds two numbers and returns the sum as the response. This code follows the template you provided:

```NodeJS
const handle = async (context) => {
  let sum = 0;
  if (context.method === 'POST') {
    const body = JSON.parse(context.body);
    sum = body.a + body.b;
  }
  
  return {   body: {   
        "sum": sum  
      } 
   };
}

module.exports = { handle };
