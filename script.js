var settingsMenu=document.querySelector('.settings-menu');
var darkBtn=document.getElementById('dark-btn');
function settingsMenuToggle(){

    settingsMenu.classList.toggle('settings-menu-height')
}
darkBtn.onclick=function(){
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');

if(localStorage.getItem("theme")==='light'){
    localStorage.setItem('theme','dark');
}
else{
    localStorage.setItem('theme','light');
}

}


if(localStorage.getItem("theme")==='light'){
    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
}
else if(localStorage.getItem("theme")==='dark'){
    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme');
}
else{
    localStorage.setItem('theme','light');
}






function signUp(){
   
    var YourEmail=document.getElementById("signemail").value;
    var YourPassword=document.getElementById("signUpPassword").value;
    var confirmPassword=document.getElementById("confirm-password").value;
    if(YourEmail && YourPassword &&confirmPassword){
       
        if(YourPassword===confirmPassword){
            let userInfo={
                email:YourEmail,
                password:YourPassword,
                
            }
            localStorage.setItem("userDetails",JSON.stringify(userInfo));
            window.location.href="index.html";
        }else{
            alert("passwords do not match");
        }
      
    }
    else{
        alert("enter all details");
        
    }
    
}
    
    
    
    function login(){
       
        var userEmail=document.getElementById("login-email").value;
        var Password= document.getElementById("login-password").value;
        if(userEmail && Password){
    let localStorageData=localStorage.getItem("userDetails");
    
    if(localStorageData){
    
    localStorageData=JSON.parse(localStorageData);
    if(userEmail === localStorageData.email && Password===localStorageData.password){
        // alert("login successfull");
        window.location.href="login-page.html";
    }
    else{
        alert("username/password is not matched");
    }
    
    }
    else{
        alert("please do signup first and login");
    }
    
    
    
        }
        else{
            alert("please enter all the details");
        }
    }