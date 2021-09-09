const me = {
    name:"nico",
    profile:{
        email:"fddsgt@naver.com"
    }
}

const lynn = {
    name:"lynn"
}

console.log(me.profile.email)

console.log(lynn.profile && lynn.profile.email)
//lynn, profile, email, provider순으로 존재하는지 확인하고, 존재한다면 name을 출력
console.log(lynn?.profile?.email?.provider?.name)