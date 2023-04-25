const handle = async (context) => {
  const { num1, num2 } = context.query;
  
  if (!num1 || !num2) {
    return { statusCode: 400, body: 'Please provide both numbers' };
  }
  
  const sum = Number(num1) + Number(num2);
  
  return { statusCode: 200, body: `The sum is ${sum}` };
};

module.exports = { handle };
