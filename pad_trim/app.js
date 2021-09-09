let hours = 12;
let minutes = 3;
let seconds = 2;

console.log(`${hours}h:${minutes}m:${seconds}s`)
//두자리로 표시되도록 수정
console.log(`${hours}h:${minutes<10 ? `0${minutes}` : `${minutes}`}m:${seconds}s`)
//padStart활용
//만약 2 자리가 아니라면, 2자리가 되도록 0을 채움(문자열의 길이가 2임을 강조, 빈칸 채우기)
console.log(String(minutes).padStart(2,"0"))

//앞, 뒤 빈칸제거
let hello = "         hello        ";
console.log(hello)
console.log(hello.trimStart().trimEnd())