const handle = async (context) => {
  context.log.info(JSON.stringify(context, null, 2));

  if (context.method === 'POST') {
    if (!context.body.num1 || !context.body.num2) {
      return {
        statusCode: 400,
        statusMessage: 'Bad request. Requires num1 and num2 in POST body'
      };
    }

    const result = `${String(context.body.num1)}${String(context.body.num2)}`;
    
    return { body : result};
    
  } else {
    return { statusCode: 405, statusMessage: 'Method not allowed' };
   }
};

module.exports = { handle };

