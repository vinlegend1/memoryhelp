const fs = require("fs");
const parse = require("csv-parse");

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const dayLapse = [1, 3, 7, 14, 21, 28, 60, 90];

function convertToProperDateFormat(date) {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;

  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return mm + "-" + dd + "-" + yyyy;
}

function addToMemory(name) {
  const date = new Date();
  const memoryDays = [];
  let thing;

  for (let i = 0; i < dayLapse.length; i++) {
    if (i === 0) {
      thing = 0;
    }
    memoryDays.push(
      convertToProperDateFormat(date.addDays(dayLapse[i] + thing))
    );
    fs.appendFileSync("memoryList.csv", `${name};${memoryDays[i]}\n`);
    thing += dayLapse[i];
  }
}

function listMemoriesForToday() {
  const today = convertToProperDateFormat(new Date());

  const csvData = [];
  fs.createReadStream("memoryList.csv")
    .pipe(parse({ delimiter: ";" }))
    .on("data", function (csvrow) {
      csvData.push(csvrow);
    })
    .on("end", function () {
      //console.log(csvData);
      const data = csvData.filter((data) => data[1] === today);

      console.log(data.length === 0 ? "none for today" : data);
    });
}

function listAllMemoryNames() {
  const csvData = [];
  const nameData = [];
  fs.createReadStream("memoryList.csv")
    .pipe(parse({ delimiter: ";" }))
    .on("data", function (csvrow) {
      csvData.push(csvrow);
    })
    .on("end", function () {
      //console.log(csvData);
      csvData.forEach((d, index) => {
        if (index !== 0 && csvData[index - 1][0] === d[0]) {
          return;
        }
        nameData.push(d[0]);
      });

      console.log("Count of things in memory", nameData.length);
      console.log("Everything in memory: ", nameData);
    });
}

function main() {
  if (process.argv.slice(2).length === 0) {
    listMemoriesForToday();
  }
  if (process.argv[2] === "-a") {
    addToMemory(process.argv[3]);
  }
  if (process.argv[2] === "-l") {
    listAllMemoryNames();
  }
}

main();
