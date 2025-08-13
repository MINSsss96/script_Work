// for loop 문법
// 자바와 동일
// #
// ##
// ###
// ####
// #####


for (let i = 1; i < 6; i++) {
  let star = ''
  for (let j = 0; j < i; j++) {
    star = star + '#';

  }
  console.log(star)
}

//java : advanced For
// for(int x : data){
//}

// Java Script
// for ~ in 구문 : 인덱스 기준
// for ~ of 구문 : Java의 advanced for랑 같음

const ahn = {
  name: '안유진',
  year: 2003,
  group: 'ive',
}

console.log('====================')
console.log('for ~in : object 순회')
// for ~ in
for (let x in ahn) {
  console.log(ahn[x]);
}

console.log('====================')
console.log('for ~of : 배열, 리스트에서 가능')
let ive = ['장원영', '안유진', '이서']
for (let x of ive) {
  console.log(x);
}
console.log('====================')
for (let x in ive) {
  console.log(ive[x]);
}

//문제 1. group 이름을 for 구문으로 출력
//문제 2. 각 그룹 이름 출력 후 멤버의 이름을 출력

//멤버의 이름을 출력
//그룹명 : ive
//ive 멤버 : 장원영, 안유진, 이서

//그룹명 : 에스파
//ive 멤버 : 카리나, 윈터, 지젤, 닝닝

//그룹명 : 케플러
//ive 멤버 : 최유진, 샤오팅, 마시로
console.log('====================')
let k_group = [
  {
    group: 'ive',
    name: ['안유진',
      '장원영',
      '레이',
      '이서',
      '가을',
      '리즈',],
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
]

for (let i in k_group) {
  let group = k_group[i].group;
  let member = ''
  console.log(`${+i+1}. 그룹명 : ${k_group[i].group}`);
  for (let j of k_group[i].name){
    member = member + j + ' ';
  }
console.log(`${group} 멤버 : ${member}`);
}

// break : 현재의 블럭을 탈출
// continue : 현재 아래 실행하지 않고 블럭 계속 진행
// return : 함수를 빠져 나가는 것
// do ~ while or while :
// 1 ~ 10 까지 회전하면서, 5면 탈출

number=1;
do{
  if(number==5) break;
  console.log(number) ;
  number++

}while(number<11)

