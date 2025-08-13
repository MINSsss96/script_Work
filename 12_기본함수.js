console.log(`원본 수정하는 함수`)
console.log(`1)array 함수`);
let iveMember =[
  '장원영',
  '안유진',
  '리즈',
];

console.log('for ~of')
for(let x of iveMember){
  console.log(x)
}

// array에서 사용되는 함수
// 1)push() : array 맨 끝에 추가
iveMember.push('가을');
console.log(iveMember);
console.log(iveMember.push('이서'));
console.log(iveMember);

// 2) pop() : array 에서 맨 마지막 자료 삭제
let removeMember = iveMember.pop();
console.log(removeMember);
console.log(iveMember);

console.log("=============================")
// 3) unshift() : array 맨 앞에 추가하기
iveMember.unshift('홍길동');
console.log(iveMember)

console.log("=============================")
// 4) shift() : array 맨 앞 자료 삭제하기
iveMember.shift();
console.log(iveMember)

//5) splice(시작위치, 몇개) : 삭제할건지
iveMember.splice(1,2);
console.log(iveMember);

console.log("=============================")
console.log("=============================")
console.log("=============================")

console.log(`원본 수정 안하는 함수`)
// 6) concat() : 새 아이템을 뒤에 삽입
let ive =[
  '장원영',
  '안유진',
  '리즈',
  '가을',
];

console.log(ive.concat('홍길동'));
console.log(ive)

console.log("=============================")
// 7) slice(어디부터 어디까지) : 검색용
// 끝 위치 : 어디까지 -1
// ive.slice(0,3) : 0~2까지 

console.log(ive.slice(1,2));
console.log(ive.slice(0,3));
console.log(ive.slice(1,3));
console.log(ive)

// 7) spread operator *********** "..."
// 배열의 내용을 펼쳐서 처리를 함
// 하드카피 할 때 많이 사용함

let ive2 = ive; // 얕은 복사(주소 공유)
console.log(`ive : ${ive}`);
console.log(`ive2 : ${ive}`);

// ive2 맨 앞에 홍길동 추가하기

ive2.unshift('홍길동');
console.log(`ive : ${ive}`);
console.log(`ive2 : ${ive}`);

console.log("=============================")
console.log(`배열 또는 오브젝트 하드카피`)
let ive3 = [...ive];
ive3.unshift('이순신');
console.log(`ive : ${ive}`);
console.log(`ive3 : ${ive3}`);

let obj = {name : '아무개'};
let obj2 = {...obj};
