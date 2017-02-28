var audio = new Audio('kid-cudi-day-nite.mp3');

document.getElementById("orb").addEventListener("click", function(){
    changeToNight();
    
    /*if(audio.play() == true){
        audio.pause();
    }*/
    
});

function changeToNight(){
    if(document.getElementById("orb").className == "sun"){
        
        document.getElementById("sky").className = "night";
        document.getElementById("orb").className = "moon";
        document.getElementById("moonspot1").className ="visible";
        document.getElementById("moonspot2").className ="visible";
        document.getElementById("moonspot3").className ="visible";
        audio.play();
        
    }
    else if(document.getElementById("orb").className == "moon"){
        
        document.getElementById("sky").className = "day";
        document.getElementById("orb").className = "sun";
        document.getElementById("moonspot1").className ="";
        document.getElementById("moonspot2").className ="";
        document.getElementById("moonspot3").className ="";
        audio.pause();
    }
}