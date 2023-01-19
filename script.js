const dataEl = document.querySelector('#data');
const guardsEl = document.querySelector('#guards');

const openFile = (e) => {
  const reader = new FileReader(); // filereader
  reader.readAsText(e.target.files[0]); // read as text
  reader.onload = () => {
    const text = reader.result;
    const result = text.split(/\r?\n/); // split on every new line
    // do something with array
    const data = [];
    const query = 'Guard';
    const re = RegExp(`.*${query.split('').join('.*')}.*`);
    const splittedArr = result.map((item) =>
      item
        .trim()
        .replace(/[-:]/g, '')
        .replace(/\[/g, '')
        .replace(/\]/g, '')
        .replace(/\s/, ',')
        .replace(/\s/, ',')
        .replace(/\s/, '')
        .replace(/\s/, ',')
        .replace(/\s/, '')
    );
    splittedArr.forEach((item) => {
      data.push(item.split(','));
    });
    const guardArray = [];
    const sorted = data.sort();
    // console.log(sorted);

    const datesArrFucksake = getDates(sorted);
    const guadsFuck = [];
    renderPage(dataEl, datesArrFucksake);
    sorted.forEach((guard) => {
      const filtered = guard.forEach((item) => {
        if (item.match(re)) {
          guadsFuck.push(item);
          // console.log(item);
        }
      });
    });
    console.log(guadsFuck);
    renderPage(guardsEl, guadsFuck);

    // let obj = {};
    // sorted.forEach((guard) => {
    // const filtered = guard.forEach((item) => {
    // let obj = {};
    // let sleep = {};
    // let wake = {};
    // if (item.match(re)) {
    //   obj[`${guard[2]}`] = guard[2];
    //   obj[`${guard[0]}`] = guard[0];
    //   obj[`${guard[1]}`] = guard[1];
    // } else if (item.match(/fall/)) {
    //   // obj.date2 = guard[0];
    //   obj[`${guard[2]}`] = parseInt(guard[1]);
    // } else if (item.match(/wakes/)) {
    //   // obj.date3 = guard[0];
    //   obj[`${guard[2]}`] = parseInt(guard[1]);
    // } else {
    //   return;
    // }
    // obj.zminitsAsleep = obj.xawake - obj.sleep - 1;
    // });
    // guardArray.push(obj);
    // });
    // console.log(guardArray);
    // console.log(obj);
  };
};

// let guard = {
//   number: '#613',
//   date: '15789607',
//   shift: 0023,
//   sleep: 0034,
//   awake: 0044,
// };
// let guard2 = {
//   number: '#613',
//   date: '15789607',
//   shift: 0023,
//   sleep: 0034,
//   awake: 0044,
// };
// array.push(guard, guard2);

// console.log(array);

// const convertArrayToObject = (array) => {
//   const initialValue = {};
//   return array.reduce((obj, item) => {
//     if(item.includes('Guard')){

//       return {
//         ...obj,
//         [item['guard']]: item[2],
//         [item['beginsshift']]: item[3],
//         [item['date']]: item[0],
//       };
//     }
//     return {
//       ...obj,
//       [item['guard']]: item,
//       [item['beginsshift']]: item,
//       [item['date']]: item,
//       [item['fallsasleep']]: item,
//       [item['wakesup']]: item,
//     };
//   }, initialValue);
// };
// const convertArrayToObject = (array, key) => {
//   const initialValue = {};
//   return array.reduce((obj, item) => {
//     return {
//       ...obj,
//       [item[key]]: item,
//     };
//   }, initialValue);
const data = [];


function getDates(arr) {
  const onlyDates = [];
  arr.forEach((date) => onlyDates.push(date[0]));
  const filtered = removeDuplicates(onlyDates);
  return filtered;
}
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

function getGuards(arr) {
  const allData = [];
  const guardsOnly = [];
  const query = 'Guard';
  const re = RegExp(`.*${query.split('').join('.*')}.*`);

  arr.forEach((date) => allData.push(date[2]));

  allData.forEach((item) => {
    // if (item.match(re)) {
    //   guardsOnly.push(item);
    // }
    console.log(typeof item);
  });
  return guardsOnly;
}

function renderPage(element, arr) {
  arr.forEach((item) => {
    return (element.innerHTML += `
    <p>${item}</p>
  `);
  });
}
