//Object를 실무에서 다루게 될 때, Object관련 함수를 mdn에서 찾아보고 활용하자.
//Obecjt freeze 등등 쓸모있는게 많음!

const person = {
    name: "nico",
    age: 12
}

console.log(Object.values(person))
console.log(Object.entries(person))

//Array로 Object만들기
const someone = Object.fromEntries([["name","nico"],["age",12],["f","k"],["hello",true]])
console.log(someone)

