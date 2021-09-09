//object destructuring
const setting = {
    notifications:{
        follow: true,
        alert: true,
        unfollow: false
    },
    color: {
        theme: "dark"
    }
}

//false는 default value.
//destructing했을 때, 값이 없는 경우에 대비할 수 있다.
const {
    notifications:{follow = false} = {},
    color
} = setting;

console.log(follow);
console.log(color);

//Array destructuring
//가져온 정볼르 조작하지 않을 때 쓰기 좋다
const days = ["Mon", "Tue", "Wed"];

const [mon, tue, wed, thu="Thu"] = days;
console.log(mon);
console.log(tue);
console.log(wed);
console.log(thu);


//Renaming
//object destructuring을 유지하면 이름 다시 짓기
const settings = {
    color:{
        chosen_color: "dark"
    }
};

const {
    color: {chosen_color: chosenColor = "light"}
} = settings;

console.log(chosenColor);

//만약, chosenColor가 기존에 존재하는 변수였을 경우, 아래와 같이 작성하면 동작한다.
//실험해 보고 싶으면 위에 단락 주석하고 시험해보기
const settings = {
    color:{
        chosen_color: "dark"
    }
};

let chosenColor= "blue";

({
    color: {chosen_color: chosenColor = "light"}
} = settings);

console.log(chosenColor);


//function destructing
//매개변수 목록에서 object destructuring 하는 것.
function saveSettings({notifications, color:{theme}}){
    console.log(notifications, theme);
}

saveSettings({
    notifications:{
        follow: true,
        alert: true,
        mkt: false
    },
    color: {
        theme: "blue"
    }
});