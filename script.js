// let p=fetch("https://yts.mx/api/v2/list_movies.json");
// p.then(res=>{
//     console.log(res.status)
// }).then(data=>{
//     console.log(data);
// })
let mainBox=document.querySelector(".main-box");
let detailBox=document.querySelector(".detail-box");
let hello=document.querySelector(".hello");
function fetching(){
        fetch('https://yts.mx/api/v2/list_movies.json')
        .then(result => result.json())
        .then(data => {
                data.data.movies.forEach(element => {
                    const content=document.createElement("div");
                    content.style.backgroundImage='url("'+element.medium_cover_image+'")';
                    // content.innerHTML=element.title;
                    content.className="content";
                    const title=document.createElement("span");
                    title.className="title";
                    const button= document.createElement("button");
                    button.classList="btn"
                    button.innerHTML="Details";
                    title.innerHTML=element.title;
                    content.appendChild(title);
                    content.appendChild(button);   
                    console.log(content)
                    mainBox.appendChild(content);
                    button.setAttribute("onclick","goDetails("+element.id+")")
                });
        });
            
}

function goDetails(id){
        console.log(id);
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then(result=> result.json())
        .then(data=>{
                let title= document.createElement("p");
                title.innerText=data.data.movie.title;
                title.classList="title";
                console.log(title);
                let img=document.createElement("img");
                console.log(img);
                let h1=document.createElement("h1");
                h1.innerHTML="Description";
                let introDescription=document.createElement("p");
                img.src=data.data.movie.medium_cover_image;
                introDescription.innerHTML=data.data.movie.description_intro;
                detailBox.appendChild(title);
                detailBox.appendChild(img);
                detailBox.appendChild(h1);
                detailBox.appendChild(introDescription);
                
        
        })
        mainBox.classList.add("hide");
        detailBox.classList.remove("hide");
}
window.onload=function abc(){
        fetching();
}