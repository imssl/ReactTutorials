
//those functions depend on template .js files

function routeToCreateEmployee () {

    //1) identify content node with selector
    let mainDiv =document.getElementById("contentDiv");

    //2) Update .content node with template contents
    mainDiv.innerHTML=createEmployeePage();
}
