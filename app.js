import {posts} from "/data.js"

let panelsEl = document.querySelector(".panels")

panelsEl.innerHTML = renderPosts(posts,3)

window.addEventListener('click',function(e){
    if(e.target.id === "view-more"){ 
        panelsEl.innerHTML += renderPosts(posts)
    }
})

function renderPosts(postsArray){

    let panelEl = ""
    let i = 0

    for (let post of postsArray){
        console.log(i)
        if(i < 3 && post.isRendered === false){

            panelEl += 
            `
            <div class="panel">
                <img  class="panel-img" src=${post.img} alt=${post.alt}>
                <p class="panel-date">${post.date}</p>
                <h2 class="panel-h2">${post.title}</h2>
                <p class="panel-desc">${post.desc}</p>
            </div>
            `
            post.isRendered = true
            i++
            
        }
    }
    return(panelEl)
}
