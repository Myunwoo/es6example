//Generator
function* listPeople(){
    yield "a";
    yield "b";
    yield "c";
    yield "d";
    yield "e";
    yield "f";
}

const listG = listPeople();

console.log(listG)
console.log(listG.next())
console.log(listG.next())
console.log(listG.next())
console.log(listG.next())
console.log(listG.next())
console.log(listG.next())
console.log(listG.next())
console.log(listG.next())
console.log(listG.next())

const userObj = {
    username:"myun",
    age:26,
    password: 1234
}


//Proxy
//Proxy는 구현하기에 따라 Observer pattern처럼 활용될 수 있다.
//new Proxy를 통해 자바스크립트 제공 프록시를 생성할 수도 있고, 커스텀할 수도 있음
const userFilter = {};

const filter = new Proxy(userObj, userFilter)

console.log(userFilter)