const friends = ["taek", "ho", "zoo", "myun", "hey", "what"];

const addHeart = currentItem => {
    console.log(currentItem);
}

friends.forEach(addHeart)

//for-of
//forEach와 다른점: friend를 const  혹은 let 으로 선택해서 선언 가능, iterable한 모든 것에 동작함(String 포함)
//forEach를 사용하면 루프를 멈출 수 없지만, for of 는 가능.
for(const friend of friends){
    if(friend === "zoo")
        break;
    console.log(friend);
}