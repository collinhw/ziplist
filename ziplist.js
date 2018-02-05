const testlist1 = ['a', 'b', 'c'];
const testlist2 = [1, 2, 3];

function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

console.log(zipList(testlist1, testlist2));

function zipListTheSimpleWay(list1, list2) {
  const test = _.flatten(_.zip(list1, list2));
  return test;
}

console.log(zipListTheSimpleWay(testlist1, testlist2));
