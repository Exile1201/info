if(!localStorage.getItem('webLang')){
  localStorage.setItem("webLang", 'en');
  lang = "en";
  }
    switch (lang) {
        case "en":langText = 'English';break;
        case "cn":langText = 'Chinese';break;
        case "jp":langText = 'Japanese';break;
        case "kr":langText = 'Korean';break;
    }
// console.log(reg)
    let html = `
<div class="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul class="navbar-nav">
                    ${navDropdown.join("")}
                    
                    
                </ul>
<ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ace-donatemodal"><img height='20px' style='border:0px;height:20px;margin-top:-5px' src='./img/items/GOLD.png'>  Donate</button>
                </li>
 <li class="nav-item dropdown" id="navitemLanguage">
                    <a class="nav-link dropdown-toggle" style="display:inline-flex;padding-left:25px"href="#" id="languageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <div class="ak-subtitle ak-disable" translate-id="language-2">Language</div>
                            <div class="ak-disable" id="display-lang">`+langText+`</div>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item lang unselectable" onclick="langDropdown($(this))" value="en">English</a>
                        <a class="dropdown-item lang unselectable" onclick="langDropdown($(this))" value="cn">Chinese</a>
                        <a class="dropdown-item lang unselectable" onclick="langDropdown($(this))" value="jp">Japanese</a>
                        <a class="dropdown-item lang unselectable" onclick="langDropdown($(this))" value="kr">Korean</a>
                    </div>
                </li>
            </ul>
</div>
`
    $('#aknav').html(html);
}
