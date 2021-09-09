//Spread
const friends = ["nico", "lynn"]
const newFriends = [...friends, "dal"]

console.log(newFriends);

const nico = {
    username: "nico",
    wow: {
        hello: true
    }
}

console.log({...nico, password:1})


///lastname을 조건부로 추가하기
const lastName = prompt("Last name");

const user = {
    username: "myun",
    age: 26,
    ...(lastName !== "" && {lastName})
}

console.log(user);


//Rest
//나머지들을 변수 하나로 압축시키는 것
const bestFriendMaker = (firstOne, ...rest) => {
    console.log(`My best friends is ${firstOne}`);
    console.log(`I don't case about ${rest}`);
}

bestFriendMaker("myun", "taek", "ho", "zoo");


const user2 = {
    name: "myunwoo",
    age: 26,
    password: 12345
};

//destructuring을 통해 매개변수로 전달받은 객체를 password와 나머지로 나누고, 나머지만을 리턴하는 동작 수행
const killPassword = ({password, ...rest}) => rest;
console.log(killPassword(user2))

//destructuring에 default value를 설정할 수 있는 점을 이용해서 새로운 요소 삽입
const setCountry = ({country = "KR", ... rest}) => ({country, ...rest})
console.log(setCountry(user2))

const wierdUser = {
    NAME: "Myun",
    age: 26
}

const rename = ({NAME:name, ...rest}) => ({name, ...rest})
console.log(rename(wierdUser));