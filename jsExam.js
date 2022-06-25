var imgElement = document.getElementsByTagName("img");
var imageLayer = document.querySelectorAll(".imageLayer")
var inputElement = document.getElementById("inputElement")
var navbarTogglerIcon = document.getElementById("navbarTogglerIcon");
var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPhone = document.getElementById("userPhone");
var userAge = document.getElementById("userAge");
var userPassword = document.getElementById("userPassword");
var userRepassword = document.getElementById("userRepassword");
var navbarToggleExternalContent = document.getElementById("navbarToggleExternalContent");
var verticalNavbar = document.getElementById("verticalNavbar");
var closeIcon =document.getElementById("closeIcon");
var spanButton = document.getElementById("spanButton");



// *****************************************************************************
// N  A  V  B  A  R
// *****************************************************************************

navbarTogglerIcon.addEventListener("click" , function(e){
console.log(e.clientX);
    if(e.clientX>100){
        verticalNavbar.style.cssText = ("width:0px");
        navbarToggleExternalContent.classList.replace("d-inline","d-none");
        closeIcon.classList.add("d-none")
        spanButton.classList.remove("d-none");
    }else{
        verticalNavbar.style.cssText = ("width:240px");
        navbarToggleExternalContent.classList.replace("d-none","d-inline");
        spanButton.classList.add("d-none");
        closeIcon.classList.remove("d-none");
    }
})

// *****************************************************************************
// D  I  S  P  L  A  Y     M  O  V  I  E  S
// *****************************************************************************

var finalResponseResults =[];

async function getMovies(){
    var response = await fetch ("https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR1oT6M4tGdFMK11bv0jleK-atzaVivH4isvWNySH_yjd9prCXkoXsfsRO4");
    finalResponse = await response.json();
    finalResponseResults = await finalResponse.results;
       
}
getData();
    async function getData(){
    await getMovies();
    displayMovies(finalResponseResults);
}

// *****************************************************************************
// D  I  S  P  L  A  Y     M  O  V  I  E  S
// *****************************************************************************

function displayMovies(list){
    cartona = "";

    for (var i=0 ; i < list.length ; i++){
        cartona += `
        <div class="col-md-4">
            <div  class="imageContent position-relative">
                <img  id="demo" src="https://image.tmdb.org/t/p/w500${list[i].poster_path}" class="w-100 rounded">
                <div id="movieDetails" class="imageLayer position-absolute align-items-center justify-content-center ">
                    <div class="movieDetails ">
                        <h2>${list[i].title}</h2>
                        <p>${list[i].overview}</p>
                        <p>rate: ${list[i].vote_average}</p>
                        <p>${list[i].release_date}</p>
                    </div>
                </div>
            </div>                   
        </div>    
        `
    }
    document.getElementById("imgSrc").innerHTML = cartona;
}


// *****************************************************************************
// F  u  n  c  t  i  o  n     f  o  r     M  o  v i  e    S  e  a  r  c  h
// *****************************************************************************

function SearchByWord() {
    var searchedItem = [];
    for (var i=0 ; i<finalResponseResults.length ; i++ ){
        if(finalResponseResults[i].title == undefined ){
            finalResponseResults[i].title = "";
        }
        if (finalResponseResults[i].title.toLowerCase().includes(inputElement.value.toLowerCase())) {
        searchedItem.push(finalResponseResults[i]);
        }
    }
    displayMovies(searchedItem);
}

// *****************************************************************************
// V  A  L  I  D  A  T  I  O  N
// *****************************************************************************

function validateUserName(){
    if (userName.value == ""){
        document.getElementById("userNameWarning").classList.remove("d-none");
    } else {
        document.getElementById("userNameWarning").classList.add("d-none");
    }
}

function validateUserEmail(){
    var regex =/^.{1,}\@(yahoo|hotmail|gmail)\.com$/gmi;
    if (userEmail.value == "" || regex.test(userEmail.value) != true){
        document.getElementById("userEmailWarning").classList.remove("d-none");
    } else {
        document.getElementById("userEmailWarning").classList.add("d-none");
    }
}

function validateUserPhone(){
    var regex =/^01[0125][0-9]{8}$/gm;
    if (userPhone.value == "" || regex.test(userPhone.value) != true){
        document.getElementById("userPhoneWarning").classList.remove("d-none");
    } else {
        document.getElementById("userPhoneWarning").classList.add("d-none");
    }
}
function validateUserAge(){
    var regex =/^[0-9]{2}$/gm;
    if (userAge.value == "" || regex.test(userAge.value) != true){
        document.getElementById("userAgeWarning").classList.remove("d-none");
    } else {
        document.getElementById("userAgeWarning").classList.add("d-none");
    }
}
function validateUserPassword(){
    var regex =/^(?=.*[0-9])(?=.*[a-z])([a-z0-9]+){8,}$/gmi;
    if (userPassword.value == "" || regex.test(userPassword.value) != true){
        document.getElementById("userPasswordWarning").classList.remove("d-none");
    } else {
        document.getElementById("userPasswordWarning").classList.add("d-none");
    }
}
function validateUserRepassword(){
    if (userRepassword.value !== userPassword.value){
        document.getElementById("userRepasswordWarning").classList.remove("d-none");
    } else {
        document.getElementById("userRepasswordWarning").classList.add("d-none");
    }
}
// ***********************************************************************************


// ***************************************************************************************
// Dont work i don't know why but i replaced it by another function
// ***************************************************************************************

// h  o  v  e  r      f  u  n  c  t  i  o  n

// function hoverEnter(){
//     var imgElementList = Array.from (imgElement)
//     console.log("imgElementList");
//     for (var i=0 ; i<imgElementList.length ; i++ ){
//         imgElementList[i].addEventListener("mouseenter", function (e){
//             var imgIndex = imgElementList.indexOf(e.target)
//             console.log(imgIndex);
//             imageLayer[imgIndex].classList.replace("top-100","top-0")
//             imageLayer[imgIndex].classList.replace("d-none","d-flex")
//         })
//     }   
// }

// function hoverLeave(){
//     console.log("ggggggggggggggggg",imgElement);
//     var imgElementList = Array.from (imgElement)

//     console.log(imgElementList);
//     for (var i=0 ; i<imgElementList.length ; i++ ){
//         imgElementList[i].addEventListener("mouseleave", function (e){
//             var imgIndex= imgElementList.indexOf(e.target);
//             console.log(imgIndex);
//             imageLayer[imgIndex].classList.replace("top-0","top-100");
//             imageLayer[imgIndex].classList.replace("d-flex","d-none");
//         })
//     }
// }

// ***************************************************************************************






