let database={
    "john":{
        age: 15,
        occupation: "driver",
        password: "john123",
    },
    "smith":{
        age: 17,
        occupation: "smither",
        password: "smith123",
    },
    "james":{
        age: 25,
        occupation: "apostle",
        password: "apostle123",
    }
}

function myFun(){
let user = prompt("enter username");
while(userfunction(user)==false||userfunction(user)=="invalid"){
    user = prompt("enter a valid username");
}
if(user==null){
    return;
}

let pasword = prompt("enter your password");

while(password(pasword)==false){
    pasword = prompt("enter a valid password");
}
if(pasword==null){
    return;
}
let passconfirm = prompt("confirm your password");
if(passconfirm==null){
    return;
}
while(passconfirm!=pasword){
    passconfirm = prompt("incorrect pls confirm again");
}
let mydata= database[user]
if(mydata==undefined){
    alert("details not found");
    return;
}
console.log(mydata);
alert(JSON.stringify(mydata));
}
myFun()
alert("you have come to the end of this program");

function userfunction(user){
    if(user==null){
        return true
    }
    if(user.includes("@")){
        return "invalid";
    }
if(user.length < 4){
    return false
}else{
    return true
}
}

function password(pass){
    if(pass==null){
        return true
    }
    if(pass.length < 6){
        return false;
    }else{
        return true;
    }
}