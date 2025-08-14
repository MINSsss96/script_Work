let k_group = [
  {
    group : 'ive',
    name : ['장원영','안유진', '이서'],
    count : 5
  },
  {
    group : '에스파',
    name : ['카리나', '윈터','지젤','닝닝'],
    count : 4
  },
  {
    group : '케플러',
    name : ['최유진', '샤오팅','마시로'],
    count : 9
  },
];

// 위 내용을 group_copy 라는 이름으로 깊은 복사해서 
// 1-1. 데이터 추가 (group : 브레이브걸스, name : 유나, 유정, 민영, count : 3)
// 1-2. 데이터를 맨 앞에 추가 (group : 블랙핑크, name : 제니, 리사, 로제, 지수 count : 4)
// 2-1) 데이터 삭제: 블랙핑크 삭제
// 2-2. 데이터 삭제 : 케플러 삭제
// 3. 데이터 수정 : group ive의 name 중 이서를 가을로 수정
// 4. group으로 오름차순 정렬
// 5. group으로 내림차순 정렬
// 6. 각 group name의 오름차순 정렬
// 7. name으로 검색 : 카리나를 변수로
// - group : 에스파, 멤버수 : 4
// 출력
// 8. 에스파의 name 정보를
// - 에스파 카리나
// - 에스파 윈터
// - 에스파 지젤
// - 에스파 닝잉
// =============================================

// 각 스크립트의 결과 출력 시 콘솔 내용

// 0) 깊은 복사
console.log('0) 깊은 복사');
group_copy = [...k_group];

/* 1-1) 데이터 추가: 브레이브걸스 */
console.log("=============================");
console.log('1-1) 데이터 추가: 브레이브걸스');
k_group.push({group: '브레이브걸스', name:['유나', '유정', '민영'], count : 3});
console.log(k_group);

/* 1-2) 데이터를 맨 앞에 추가: 블랙핑크 */
console.log("=============================");
console.log('1-2) 데이터 맨 앞 추가: 블랙핑크');
k_group.unshift({group : '블랙핑크', name : ['제니', '리사', '로제', '지수'], count : 4});
console.log(k_group);

/* 2-1) 데이터 삭제: 블랙핑크 삭제 */
console.log("=============================");
console.log('2-1) 데이터 삭제: 블랙핑크 삭제');
k_group.shift();
console.log(k_group);

/* 2-2) 데이터 삭제: 케플러 삭제 */
console.log("=============================");
console.log('2) 데이터 삭제: 케플러 삭제');
k_group.splice(2,1);
console.log(k_group);

/* 3) 데이터 수정: ive의 "이서" -> "가을" */
console.log("=============================")
console.log('3) 데이터 수정: ive의 "이서" -> "가을"')
k_group[0].name[2] ='가을';
console.log(k_group);


/* 4) group 오름차순 정렬 (단순 문자 비교) */
console.log("=============================");
console.log('4) group 오름차순');
k_group.sort((a,b)=>{
  return a.group>b.group ? 1:-1
});
console.log(k_group);


/* 5) group 내림차순 정렬 (단순 문자 비교) */
console.log("=============================");
console.log('5) group 내림차순');
k_group.sort((a,b)=>{
  return a.group<b.group ? 1:-1
});
console.log(k_group);


/* 6) 각 group의 name 오름차순 정렬 (단순 문자 비교) */
console.log("=============================")
console.log('6) 각 group name 오름차순 정렬 반영된 group_copy');
k_group = [...group_copy];
group_copy.sort((a, b) => a.group.localeCompare(b.group));
console.log(group_copy)

group_copy.sort((a, b) => a.name[0].localeCompare(b.name[0]));
console.log(group_copy)


/* 7) name으로 검색: "카리나" */
console.log("=============================")
console.log('7) name으로 검색')
console.log(k_group)
console.log(k_group[1].name.slice(0,1))

/* 8) 에스파의 name 정보를 줄마다 "에스파 XXX" 형태로 출력 */
console.log("=============================")
console.log('8) 에스파의 name 정보를 줄마다 "에스파 XXX" 형태로 출력');
k_group[1].name = k_group[1].name.map(member => `에스파 ${member}`);
console.log(k_group);
