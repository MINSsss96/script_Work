let number = 5;
// number 가 짝수면 짝수입니다. 출력
// 그렇지 않으면 홀수입니다. 출력
if (number % 2 == 0) {
  console.log('짝수입니다.');
} else {
  console.log('홀수입니다.');
}

// number 값이 2의 배수, 3의 배수, 4의 배수, 5의 배수인지
// 확인하고, 출력
// 그렇지 않으면 '2,3,4,5의 배수가 아니에요'/ 출력
if (number % 5 == 0) {
  console.log('5의 배수입니다.');
} else if (number % 4 == 0) {
  console.log('4의 배수입니다.');
} else if (number % 3 == 0) {
  console.log('3의 배수입니다.');
} else if (number % 2 == 0) {
  console.log('2의 배수입니다.');
} else {
  console.log('2,3,4,5의 배수가 아니에요');
}

// switch 구문
// gender 의 값이 1이면 남성 2이면 여성 3이면 혼성 출력 이외 값은 모름

let gender = 2;


switch (gender) {
  case 1:
    console.log('남성');
    break;
  case 2:
    console.log('여성');
    break;
  case 3:
    console.log('혼성');
    break;
  default:
    console.log('이외 값은 모름');
    break;
}

