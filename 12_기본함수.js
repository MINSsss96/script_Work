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


// 8) join() 함수 : 원본 수정 하지 않는 함수
// 배열 내 자료를 , 로 구분한 후 문자열로 반환
// ive를 iveMembers로 카피
console.log("=============================")
console.log(`8) join() 함수`)
let iveMembers =  [...ive];
console.log(iveMembers.join())

// 9) 정렬하기
console.log("=============================")
console.log(`9) 정렬하기 - sort() : 원본수정하기`)
let sortIve = [...ive];
// 숫자와 문자 모두 문자로 바꾸어서 utf-8로 비교
sortIve.sort();
console.log(sortIve.sort());


console.log("=============================")
console.log(`10) 역순정렬하기-reverse: 원본수정함.`)
let reverseIve = [...ive];

// 숫자와 문자 모두 문자로 바꾸어서 utf-8로 비교
reverseIve.reverse();
console.log(reverseIve);


// 11) sort() 함수로 오름차순, 내림차순 정렬
console.log("=============================")
console.log(`11) sort Asc/Desc... (오름차순/내림차순)`)
let numbers = [1,9,7,5,3, ];
console.log(numbers);

// numbers.sort();
// console.log(numbers);

// 오름차순 정렬
// 반환값 규칙
// 양수(1) : a가 b 뒤로 가야함
// 음수(-1) : b가 a 뒤로 가야함
// 0 : 현재 순서 유지
numbers.sort((a,b)=> {
  return a> b? 1: -1;
})
// 1, 9
console.log(numbers)

// 12) 배열 중 기준잡아서 정렬하기
let k_group = [
  {
    group: 'ive',
    name: ['안유진',
      '장원영',
'이서',
],
    count: 6,
  },
  {
    group: '에스파',
    name: ['카리나',
      '윈터',
      '닝닝',
      '지젤',],
    count: 4,
  },
  {
    group: '케플러',
    name: ['최유진',
      '샤오팅',
      '마시로',],
    count: 9
  }
];
console.log("=============================")
console.log(`12) 그룹이름으로 오름차순 정렬하기`);
console.log(k_group);
// 그룹이름으로 오름차순 정렬하기
let copyGroup = [...k_group];
// console.log("=============================")
// // 1. 아이브 -> ive
// copyGroup[0].group = 'ive';
// console.log(copyGroup);
// // 아이브 그룹의 name 중 이서 -> 가을
// console.log("=============================")
// copyGroup[0].name[2] ='가을';
// console.log(copyGroup);

copyGroup.sort((a,b)=>{
  return a.group > b.group ? 1 : -1;
})

console.log(copyGroup);

console.log("=============================")
console.log(`13) 그룹이름으로 내림차순 정렬하기`)
let reverseGroup = [...k_group];
reverseGroup.sort((a,b)=> {
  return a.group<b.group ? 1: -1;
})
console.log(reverseGroup)