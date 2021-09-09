let name;

// ||을 이용해 default값 할당 가능
console.log("hello", name || "anonymous")

// ||연산자는 True, False만을 확인하기 때문에 아래 출력문도 anonymous가 출력된다.
const zero = 0
const emptyStr = ""
//숫자 0, 빈 문자열은 False로 취급됨.
console.log("hello", zero || "anonymous")
console.log("hello", emptyStr || "anonymous")

//??연산자는 변수값이 undefined 이거나 null일 때만 동작한다.
console.log("hello", zero ?? "anonymous")
console.log("hello", emptyStr ?? "anonymous")