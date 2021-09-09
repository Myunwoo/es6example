//includes
//string에 매개변수가 포함되어 있는지 여부 true/false리턴
const isEmail = email => email.includes("@");
console.log(isEmail("myunwoo@gmail.com"));

//repeat
//원하는 횟수만큼 반복
const CC_NUMBER = "6060";
const displayName = `${"*".repeat(10)}${CC_NUMBER}`
console.log(displayName);

//startsWith
//특정 문자열로 시작하는지 확인
const name = "Mr. Myun";
console.log(name.startsWith("Mr."));
console.log(name.endsWith("Myun"));