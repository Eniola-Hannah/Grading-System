let a1Song = new Audio("gradingSystemPlaylist/audio_ff81343224.mp3")
let f9Song = new Audio("gradingSystemPlaylist/QBEGN9A-game-lose.mp3")

const showResult=()=>{
    score = userInput.value
    if (score == ""){
        userDisplay.innerText = "Input a score"
    }
    else if(score >= 0 && score < 40){
        userDisplay.innerText = "F9 ~ Failed"
        f9Song.play()
    }
    else if(score >= 40 && score < 45){
        userDisplay.innerText = "D7 ~ Passed"
    }
    else if (score >= 45 && score < 50){
        userDisplay.innerText = "C4 ~ Credit"
    }
    else if (score >= 50 && score < 60){
        userDisplay.innerText = "B3 ~ Average"
    }
    else if (score >= 60 && score < 75){
        userDisplay.innerText = "B2 ~ Distinctive"
    }
    else if(score >= 75 && score <= 100){ 
        userDisplay.innerText = "A1 ~ Excellent"
        a1Song.play()
    }else{
        userDisplay.innerText = "Undefined"
    }
}