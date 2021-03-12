

$(document).ready(function(){
    let dropdown = []
    dropdown.push({name:"Home",content:"index.html"})
    dropdown.push({
        name:"About Me",
        content:[
            {
                href:"https://exile1201.github.io/blog/index.html",
                name:"Blogs",
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
        name:"Projects",
        content:[
        {
            href:"pixelgame.html",
            name:"Pixel Game"
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
    dropdown.push({name:"Changes",content:"other/changes.html"})
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
                    <div class="subtitle disable">${drop.name}</div>
            `)
            
            
            // console.log(isCurrent)
            navDropdown.push(`
                    <div class="enable ">${isCurrent}</div>
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


            </ul>
        </div>

    `
    $('#nav').html(html)

        var donate = `
    <div class="modal fade " id="ace-donatemodal">
        <div class="modal-dialog modal-dialog-centered modal" >
            <div class="modal-content" style="background:#444">
        
            <!-- Modal Header -->
            <!-- <div class="modal-header">
                <h4 class="modal-title"></h4>
                
            </div> -->
        
            <!-- Modal body -->
            <div class="modal-body acedonate-body">
            	<div style="text-align:left; margin: 5px;">
            		<h5>Support Me</h5>
            		<p>I make this website for myself in my free times, worth.</p>
            		<p>A dollar would help me live, plz...</p>
            		
            	</div>
            	<div class="row" style="padding: 10px; max-height: 160px; background-color: #333;">
            		<div class="col-md-6">
	            		<a class="btn btn-info" style="padding:15px; width: 100%; height: 100%" href='#' target='_blank'>
	            			<b style=" color: white;">Donate on Ko-fi</b>
	            			<div style="display:block; margin-top: 20px;">
	            				<img height="50" src="https://theme.zdassets.com/theme_assets/2141020/171bb773b32c4a72bcc2edfee4d01cbc00d8a004.png">
	            				<img height="30" style="filter: brightness(100)" src="https://pngimg.com/uploads/paypal/paypal_PNG4.png">
	            			</div>
	            		</a>
            		</div>
            		<div class="col-md-6">
	            		<a class="btn btn-info" style="padding:15px 10px 10px 10px; width: 100%;" href='#' target='_blank'>
	            			<b style=" color: white;">Donate on Trakteer</b>
	            			<div style="display:block;">
	            				<div style="background-color: #bf202f; display: inline-block; border-radius: 6px; padding: 5px 10px; vertical-align: middle;">
	            					<div style="background-image: url('https://trakteer.id/images/mix/navbar-logo-lite-white-beta.png'); background-size: cover; height: 43px; width: 28px; background-position: 0% 0%;"></div>
	            				</div>

	            				<div style="display: inline-block; padding: 5px 10px; position: relative; width: 100px; height: 90px; vertical-align: middle;">
	            					<div style="filter: brightness(100); height: 110px; width: 100px; left: 0px; top: -10px; position: absolute; background-position: 0% 0%; background-size: cover; background-image: url('./img/extra/gopay.png');"></div>
	            				</div>
	            			</div>
	            		</a>
            		</div>
            	</div>

            </div>
        
            <!-- Modal footer -->
            <div class="modal-footer" style="border-top: 1px solid #2f2f2f">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
        
            </div>
        </div>
    </div>
    `
    $('#acedonate').html(donate)
});

function hideload(){
    $("#loadingOverlay").fadeOut(); 
}
