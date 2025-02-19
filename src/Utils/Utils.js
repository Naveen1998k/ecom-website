export const isEmailValid=(email)=>{
    let emailRegex=/^([a-zA-z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
}

export const checkUserLoggedIn=()=>{
    let userData=localStorage.getItem("userData")
    if(userData ==undefined){
        return false;
    }else{
        return true;
    }
}

export const getUserID=()=>{
    let userData=localStorage.getItem("userData")
    userData=JSON.parse(userData);
    return userData.id;
}