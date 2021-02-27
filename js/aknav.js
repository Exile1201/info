

$(document).ready(function(){
    let dropdown = []
    dropdown.push({name:"Home",content:"index.html"})
    dropdown.push({
        name:"Calculator",
        content:[
            {
                href:"#",
                name:"test",
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
                    <div class="ak-subtitle ak-enable">${drop.name}</div>
            `)
            
            
            // console.log(isCurrent)
            navDropdown.push(`
                    <div class="ak-enable ">${isCurrent}</div>
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
    let html = `
    <img src="./img/custom/texas.jpg" width="40" height="40" style="transform:scale(1.2,1.2)translate(-8px,1px)"class="d-inline-block align-top" alt="">
        <a class="navbar-brand" href="index.html" translate-id="topbar-1">Exile1201</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="true" aria-label="展开">
            <span class="navbar-toggler-icon"></span>
        </button>
    
