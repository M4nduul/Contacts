const fs = require('fs');

const sortData = async () => {
  const file = await fs.readFileSync('./us-500.csv', 'utf-8');
  const data = [];
  file.split('\r').forEach((line, i) => {
    if (!i || line.length <= 1) return;

    const lineArr = line.split(',');
    data.push({
      firstName: lineArr[0].replace(/\"/g, ''),
      lastName: lineArr[1].replace(/\"/g, ''),
      phoneNumber: lineArr[8].replace(/\"/g, ''),
    });
  });

  const sortedData = data
    .sort(({firstName: f1}, {firstName: f2}) => {
      return f1[0] > f2[0] ? 1 : -1;
    })
    .reduce(
      (acc, item) => {
        const currentLetter = acc[1];
        const {firstName} = item;

        if (currentLetter !== firstName[0].toLowerCase()) {
          acc[0].push({id: firstName[0]});
          acc[0].push(item);
          return [acc[0], firstName[0].toLowerCase()];
        }

        acc[0].push(item);
        return acc;
      },
      [[], ''],
    );
};

sortData();
