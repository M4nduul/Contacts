const fs = require('fs');

const main = async () => {
  const data = await JSON.parse(fs.readFileSync('./sortedData.txt', 'utf-8'));
  console.log(data);
  return data;
};

main();
