/*
***** 백틱(`) : 여러줄에 걸쳐서 출력
* 백틱 내에서 변수명의 사용은 ${변수명}으로 한다.
*/

const myCode = '내가만든 코드 \t \\코드';
console.log(myCode);
// 문자열 안에 작은 따옴표와 큰 따옴표 처리
const ive = "'아이브' 장원영";
console.log(ive);

// template literal에서 백틱과 변수 사용하기
const groupname = '아이브';
console.log(groupname + ' 장원영') 
console.log(`내가 좋아하는 
  걸그룹은 ${groupname}이구요
  좋아하는 아이돌은 안유진이랍니다.`)
  

  