// setTimeout(실행할 함수(콜백), 지연시간(ms))
// ms : 1000 -> 1초

console.log(`1) 기본 사용법`)
let basicTimer = setTimeout(function(){
  console.log(`3초가 지났어요`)
},3000);

clearTimeout(basicTimer); // 타이머 초기화

console.log(`2) 함수의 이름으로 전달하기`)
const sayHello = function(){
  console.log(`안녕하세요.`)
}

setTimeout(sayHello,2000);