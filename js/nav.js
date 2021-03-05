

$(document).ready(function(){
    let dropdown = []
    dropdown.push({name:"Home",content:"index.html"})
    dropdown.push({
        name:"Small Projects",
        content:[
            {
                href:"pixelgame.html",
                name:"Pixel Game",
            },{
                href:"#",
                name:"Leveling"
            },{
                href:"#",
                name:"Material"
            },{
                href:"#",
                name:"Material Total Usage"
            }]
    })
    dropdown.push({
        name:"Information",
        content:[
        {
            href:"#",
            name:"Operator"
        },{
            href:"#",
            name:"Enemy"
        },{
            href:"#",
            name:"Infrastructure Skill"
        },{
            href:"#",
            name:"Comparing (WIP)"
        },{
            href:"#",
            name:"Stage (WIP)"
        },{
            href:"#",
            name:"Medal List (WIP)"
        },{
            href:"#",
            name:"Roguelike Relic List (WIP)"
        }]
    })
    dropdown.push({name:"Elite Materials",content:"#"})
    dropdown.push({name:"Guide",content:"#"})
    dropdown.push({name:"Mission Story",content:"#"})
    dropdown.push({
        name:"Extra",
        content:[
        {
            href:"#",
            name:"bilibili Linker"
        },
        {
            href:"#",
            name:"CG Gallery"
        }]
    })
    // console.log(window.location.href.split("/")[window.location.href.split("/").length-1])
    let currentHtml= window.location.href.split("/")[window.location.href.split("/").length-1];
    let navDropdown = []
    dropdown.forEach(drop => {

        let isCurrent = undefined
        let isGroup = undefined
        
        // console.log(typeof drop.content)
        if(typeof drop.content == "string"){
            if(currentHtml.includes(drop.content)) {
                isGroup = true;
            }
            navDropdown.push(`
            <li class="nav-item ${isGroup?"active":""}">
                <a class="nav-link " href="${drop.content}">${drop.name}</a>
            </li> 
            `)
        }else{
            drop.content.forEach(dropelement => {
                if(currentHtml.includes(dropelement.href)) {
                    isCurrent=dropelement.name;
                    isGroup = true;
                }
                
            })
            isCurrent = isCurrent?isCurrent:"Menu"
            navDropdown.push(`
            <li class="nav-item dropdown ${isCurrent!="menu"&&isGroup?"active":""}">
            <a class="nav-link dropdown-toggle" style="display:inline-flex;padding-left:25px;"href="#" id="regionDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" >
                    <div class="ak-subtitle ak-disable">${drop.name}</div>
            `)
            
            
            // console.log(isCurrent)
            navDropdown.push(`
                    <div class="ak-disable ">${isCurrent}</div>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            `)
            // console.log(navDropdown)
            drop.content.forEach(dropelement => {
                navDropdown.push(`
                <a class="dropdown-item" href="${dropelement.href}" >${dropelement.name}</a>
                `)
            });
            navDropdown.push(`</div>`)
        }
    })
    var reg;
    var lang, langText;

    // console.log(localStorage.getItem('gameRegion'))

    if(!localStorage.getItem('gameRegion') || !localStorage.getItem('webLang')){
        localStorage.setItem("gameRegion", 'en');
        localStorage.setItem("webLang", 'en');
        reg = "cn";
        lang = "en";
    } else {
        reg = localStorage.getItem('gameRegion');
        lang = localStorage.getItem('webLang');
    }
    switch (lang) {
        case "en":langText = 'English';break;
        case "cn":langText = 'Chinese';break;
        case "jp":langText = 'Japanese';break;
        case "kr":langText = 'Korean';break;
    }
    // console.log(reg)
    let html = `
    <img src="./img/custom/texas.jpg" width="40" height="40" style="transform:scale(1.2,1.2)translate(-8px,1px)"class="d-inline-block align-top" alt="">
        <a class="navbar-brand" href="index.html" translate-id="topbar-1">Exile1201</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="展开">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul class="navbar-nav">
                    ${navDropdown.join("")}
                    
                    
                </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ace-donatemodal"><img height='20px' style='border:0px;height:20px;margin-top:-5px' src='./img/items/GOLD.png'>  Donate</button>
                </li>

                
                
            </ul>
        </div>
    `
    $('#aknav').html(html);
    })


    