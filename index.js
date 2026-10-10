let users=[
    {
        name:"Kota Jaswanth 1",
        gender:"Prefer not to say",
        who:"Kota Jaswanth",
        dangerLevel:"60%",
        description:"Dont make him angry"
    },
    {
        name:"Kota Jaswanth 2",
        gender:"Prefer not to say",
        who:"Kota Jaswanth",
        dangerLevel:"100%",
        description:"He is very dangerous"
    },
    {
        name:"Kota Jaswanth",
        gender:"Prefer not to say",
        who:"Kota Jaswanth",
        dangerLevel:"999%",
        description:"Just pray to god"
    },
    {
        name:"Uppal bal",
        gender:"Prefer not to say",
        who:"Jaswanths Husband",
        dangerLevel:"99999999%",
        description:"Even god is scared of him"
    }

]

let index=0;
function toggleUser(){
    if(users.length>index){
        index++;
        if(index>=users.length){
            index=0;
        }
    }

    document.getElementById("userName").innerHTML=users[index].name;
    document.getElementById("userGender").innerHTML=users[index].gender;
    document.getElementById("userWho").innerHTML=users[index].who;
    document.getElementById("userDangerLevel").innerHTML=users[index].dangerLevel;
    document.getElementById("userDescription").innerHTML=users[index].description;
    document.getElementById("userImage").src="assets/imgk"+(index+1)+".png";
}




