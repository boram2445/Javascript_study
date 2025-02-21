// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
const str = ["🍌", "🍓", "🍇", "🍓"];
let result = str.map((item) => (item === "🍓" ? "🥝" : item));
console.log(result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
result = result.filter((item) => item === "🥝").length;
console.log(result);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const arr1 = ["🍌", "🥝", "🍇"];
const arr2 = ["🍌", "🍓", "🍇", "🍓"];
let res = arr1.filter((value) => arr2.includes(value));
console.log(res);

// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
let average = nums
  .filter((value) => value >= 5) //
  .reduce((avg, num, _, arr) => avg + num / arr.length, 0);
console.log(average);
