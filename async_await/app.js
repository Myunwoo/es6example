//Promise의 상위호환!
const getMoviesPromise = () => {
    fetch("https://yts.am/api/v2/list_movies.json")
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(json => console.log(json))
        .catch(e => console.log(`err occured ${e}`));
}

const getMoviesAsync = async() => {
    //Promise의 catch에 해당하는 내용은 try catch문 안에 await를 넣음으로써 해결함
    try{
        //await는 promise가 끝나기를 기다림, resolve 값을 리턴함.
        const response = await fetch("https://yts.am/api/v2/list_movies.json");
        const json = await response.json();
        console.log(json);
    }catch(error){
        console.log(`error occured: ${error}`);
    }finally{
        console.log("We are done!!");
    }
}

getMoviesAsync();

//Parallel, Promise.all
const getParallelAsync = async() => {
    try{
        //some api의 결과가 movieReponse로, other api의 결과가 upcomingResponse로
        const [movieReponse, upcomingResponse] = await Promise.all([
            fetch("some api"),
            fetch("other api")
        ]);
        const [movies, upcoming] = await Promise.all([movieReponse.json(), upcomingResponse.json()])
        console.log(movies)
        console.log(upcoming)
    }catch(error){
        console.log(`error occured: ${error}`);
    }finally{
        console.log("We are done!!");
    }
}

//Promise.allSettled
//Promise.all과 다른점: 모든 Promise가 성공할 필요는 없다.
//Promise각각이 성공하든, 실패하든 완료되기만 하면 결과를 object로 리턴함.
