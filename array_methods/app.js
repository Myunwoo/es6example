//Array.of
const friends = Array.of("myun","ho","taek","zoo");
console.log(friends);

//Array.from
//array-like-object로부터 array를 생성
const buttons = document.querySelectorAll("button");
Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        console.log("clicked");
    })
})

//Array.find
//조건이 true인 첫 번째 요소를 리턴, 없으면 undefined
const emails = [
    "myun@naver.com",
    "wow@gmail.com",
    "good@yahoo.com"
]
const target1 = emails.find(friend => friend.includes("@yahoo.com"));
console.log(target1);

//Array.index
const target2 = emails.findIndex(friend => friend.includes("@gmail.com"));
console.log(target2);

//Array.fill
//Array.fill("교체할 문자열", "시작", "끝")
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]



//Array.flat을 대중 배열에 있는 값들을 빼서 일차원 배열로 만들어줌
let shit = [1,[2],[[8],[8],[[[8],[8],[[6],[5],[3]]]]]]
console.log(shit)

//flat함수의 디폴트 뎁스는 1이므로, 숫자를 넣어주면 원하는 뎁스까지 플랫해줌.
let wow = shit.flat()
console.log(wow)

let awesome = shit.flat(100)
console.log(awesome)

//Array.sort()
const fruits = ["apple", "strawberry", "avocado"]

//비교함수 작성법
//function compare(a, b) {
//    if(a is less than b by some ordering criterion){
//        return -1;
//    }
//    if(a is greater than b by the ordering criterion){
//      return 1;    
//    }
//    return 0;
//}

const sortFruitByLength = (fruitA, fruitB) => {
    return fruitB.length - fruitA.length
}

console.log(fruits.sort(sortFruitByLength))

const people = [
    {name: "nico", age:12},
    {name:"myun",age:24},
    {name:"zoo", age:26}
]

const sortPeopleByAge = (personA, personB) => {
    return personB.age - personA.age
}

console.log(people.sort(sortPeople))