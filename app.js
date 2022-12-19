import {posts} from "/data.js"

let panelsEl = document.querySelector(".panels")

panelsEl.innerHTML = renderPosts(posts)

window.addEventListener('click',function(e){
    if(e.target.id === "view-more"){ 
        panelsEl.innerHTML += renderPosts(posts)
    }
})

function renderPosts(postsArray){
    let panelEl = ""
    let i = 0
    if(window.innerWidth <= 500){
        for (let post of postsArray){
            console.log(i)
            if(i < 3 && post.isRendered === false){
    
                panelEl += 
                `
                <div class="panel">
                    <a href="./article.html">
                    <img  class="panel-img" src=${post.img} alt=${post.alt}>
                    </a>
                    <p class="panel-date">${post.date}</p>
                    <h2 class="panel-h2">${post.title}</h2>
                    <p class="panel-desc">${post.desc}</p>
                    
                </div>
                `
                post.isRendered = true
                i++
                
            }
        }
    }
    else if(window.innerWidth <= 850){
        for (let post of postsArray){
            console.log(i)
            if(i < 4 && post.isRendered === false){
    
                panelEl += 
                `
                <div class="panel">
                    <a href="./article.html">
                    <img  class="panel-img" src=${post.img} alt=${post.alt}>
                    </a>
                    <p class="panel-date">${post.date}</p>
                    <h2 class="panel-h2">${post.title}</h2>
                    <p class="panel-desc">${post.desc}</p>
                    
                </div>
                `
                post.isRendered = true
                i++
                
            }
        }
    }
    else{
        for (let post of postsArray){
            console.log(i)
            if(i < 6 && post.isRendered === false){
    
                panelEl += 
                `
                <div class="panel">
                    <a href="./article.html">
                    <img  class="panel-img" src=${post.img} alt=${post.alt}>
                    </a>
                    <p class="panel-date">${post.date}</p>
                    <h2 class="panel-h2">${post.title}</h2>
                    <p class="panel-desc">${post.desc}</p>
                    
                </div>
                `
                post.isRendered = true
                i++
                
            }
        }
    }

    return(panelEl)
}
