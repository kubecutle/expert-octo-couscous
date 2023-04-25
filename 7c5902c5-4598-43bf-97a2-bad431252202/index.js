const handle = async (context) => {
  context.log.info(JSON.stringify(context, null, 2));

  if (context.method === 'POST') {
    const num1 = parseInt(context.body.num1);
    const num2 = parseInt(context.body.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
      const sum = num1 + num2;
      return {
        body: { result: sum }
      };
    } else {
      return { statusCode: 422, statusMessage: 'Invalid input' };
    }
  } else {
     return { statusCode:405, statusMessage:'Method not allowed' }; 
   }
}

module.exports = { handle };
