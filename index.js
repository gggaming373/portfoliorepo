var root = document.querySelector(':root');

if (localStorage.getItem("light-mode") == 'true'){
    root.style.setProperty('--main-color', 'black');
    root.style.setProperty('--main-bg-color', 'white');

}
else if (localStorage.getItem("light-mode") == 'false'){
    root.style.setProperty('--main-color', 'white');
    root.style.setProperty('--main-bg-color', 'black');

}
else{
    localStorage.setItem("light-mode", true);
}


function switchit(){
    if (localStorage.getItem("light-mode") == 'true'){
        root.style.setProperty('--main-color', 'white');
        root.style.setProperty('--main-bg-color', 'black');
        localStorage.setItem("light-mode", false);
    }
    else if (localStorage.getItem("light-mode") == 'false'){
        root.style.setProperty('--main-color', 'black');
        root.style.setProperty('--main-bg-color', 'white');
        localStorage.setItem("light-mode", true); 
    }
    

}
var colorPicker = document.querySelector('#colors')
function colorit(){
    root.style.setProperty('--aestetic-color', colorPicker.value);
}

abouttext = document.getElementsByClassName('abouttext')[0];
function about(){
    abouttext.scrollIntoView();
}
skillstext = document.getElementsByClassName('skills')[0];
function skills(){
    skillstext.scrollIntoView();
}
function home(){
    window.scrollTo(0, 0);
}

myprojectstext = document.getElementsByClassName('myprojects')[0];
function myprojects(){
    myprojectstext.scrollIntoView();
}