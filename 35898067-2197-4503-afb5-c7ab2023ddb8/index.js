const handle = async (context) => {
  const num1 = context.query.num1;
  const num2 = context.query.num2;
  const num3 = context.query.num3;

  if (num1 && num2 && num3) {
    const result = `The result is ${num1}${num3}${num2}`;
    return { body: result };
  } else {
    return { statusCode: 400, statusMessage: 'Missing query parameters' };
  }
}

module.exports = { handle };
