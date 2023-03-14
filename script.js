// let p=fetch("https://yts.mx/api/v2/list_movies.json");
// p.then(res=>{
//     console.log(res.status)
// }).then(data=>{
//     console.log(data);
// })
fetch('https://yts.mx/api/v2/list_movies.json')
    .then(result => result.json())
    .then(data => {
            console.log(data.data.movies[0]);
    });
