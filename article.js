import {posts} from "/data.js"

let recentPosts = document.querySelector(".recent")

recentPosts.innerHTML = renderRecent(posts)

function renderRecent(postsArray){
    let recent = ""
    for (let i=0; i<3; i++){
        if(postsArray[i].isRendered ===false){
            recent += 
                `
                <div class="panel">
                    <a href="./article.html">
                    <img  class="panel-img" src=${postsArray[i].img} alt=${postsArray[i].alt}>
                    </a>
                    <p class="panel-date">${postsArray[i].date}</p>
                    <h2 class="panel-h2">${postsArray[i].title}</h2>
                    <p class="panel-desc">${postsArray[i].desc}</p>
                    
                </div>
                `
                postsArray[i].isRendered = true
        }
    }
    return recent
}