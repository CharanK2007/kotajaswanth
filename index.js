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

function finishIntro(introOverlay, body) {
    if (!introOverlay || introOverlay.classList.contains("intro-complete")) {
        return;
    }

    introOverlay.classList.add("intro-complete");
    body.classList.remove("intro-active");
}

function setupIntro() {
    const introOverlay = document.getElementById("container");
    const intro = introOverlay ? introOverlay.querySelector("netflixintro") : null;
    const body = document.body;

    if (!body) {
        return;
    }

    if (!introOverlay || !intro) {
        body.classList.remove("intro-active");
        return;
    }

    if (introOverlay.dataset.introReady === "true") {
        return;
    }

    introOverlay.dataset.introReady = "true";

    const onAnimationEnd = (event) => {
        if (event.target === intro && event.animationName === "zoom-in") {
            finishIntro(introOverlay, body);
        }
    };

    intro.addEventListener("animationend", onAnimationEnd, { once: false });
    intro.addEventListener("animationcancel", onAnimationEnd, { once: false });

    const animationStyles = window.getComputedStyle(intro);
    const animationNames = animationStyles.animationName.split(",").map((name) => name.trim());
    const animationDurations = animationStyles.animationDuration.split(",").map((duration) => duration.trim());
    const zoomAnimationIndex = animationNames.indexOf("zoom-in");

    if (
        zoomAnimationIndex === -1 ||
        animationDurations[zoomAnimationIndex] === "0s" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        finishIntro(introOverlay, body);
    }
}

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

function randomUser(){
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];
        document.getElementById("userName").innerHTML = `${user.name.first} ${user.name.last}`;
        document.getElementById("userGender").innerHTML = `Gender: ${user.gender}`;
        document.getElementById("userWho").innerHTML = `Who: ${user.name.first} ${user.name.last}`;
        document.getElementById("userDangerLevel").innerHTML = `Danger level = 0%`;
        document.getElementById("userDescription").innerHTML = `Description: ${user.email}`;
        document.getElementById("userImage").src = user.picture.large;
    });
}

setupIntro();
