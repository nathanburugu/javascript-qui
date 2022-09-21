/** @format */

const marks = [17, 19, 21];
const even = marks.filter((number) => {
  return number % 2 === 0;
});
const odd = marks.filter((number) => {
  return number % 2 !== 0 && number % 5 !== 0;
});
const byFive = marks.filter((number) => {
  return number % 5 === 0;
});
console.log(even, odd, byFive);
if (even >= 0 || odd >= 0 || byFive >= 0) {
  const answer = even.length * 1 + odd.length * 3 + byFive.length * 5;
  console.log(answer);
}
function getScore(markz[17, 19, 21]) {
  let answerr = 0;
  marks.array.forEach((score) => {
    score % 2 === 0
      ? (answerr += 1)
      : score % 2 !== 0 && score % 5 !== 0
      ? (answerr += 3)
      : (answerr += 5);
  });
  return answerr;
  console.log(answerr);
}
