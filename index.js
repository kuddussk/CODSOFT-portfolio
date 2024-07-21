
const toggle=document.getElementById('checkbtn');
const sidebar=document.getElementsByClassName('nav-middle')[0];

document.onclick=function(e){
    if(e.target.id!== 'icon'){
        toggle.classList.remove('active');
        sidebar.classList.remove('active');
        console.log("dhhfvbbbu")
    }
}
toggle.onclick=function(){
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}
