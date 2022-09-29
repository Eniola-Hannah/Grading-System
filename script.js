let a1Song = new Audio("media/Cinderella2.mp3")
let b2Song = new Audio("media/Wait-For-Me-Johnny-Drille-Prod-Johnny-Drille.mp3")
let b3Song = new Audio("media/_Live__The_Spirituals_(Official_Music_Video)(360p).mp3")
let c4Song = new Audio("media/COBHAMS_ASUQUO_-_WE_PLENTI_(ft._SIMI)_[OFFICIAL_VIDEO](480p).mp3")
let c5Song = new Audio("media/Sarah_Reeves_-_Anxious_Mokita_Remix__CeeNaija.com_.mp3")
let c6Song = new Audio("media/Sarah_Reeves_-_Motions_(Official_Music_Video)(360p).mp3")
let d_Song = new Audio("media/Cinderella1.mp3")
let e8Song = new Audio("media/Like-You-_-Tatiana-Manaois-_.mp3")
let f9Song = new Audio("media/Nosa-Always-Pray-For-YouOfficial-Video.mp3")

const showResult=()=>{
    score = userInput.value
    if (score == ""){
        userDisplay.innerText = "Input a score"
    }
    else if(score >= 0 && score <= 39){
        userDisplay.innerText = "F9 ~ Fail"
        f9Song.play()
    }
    else if(score >= 40 && score <= 44){
        userDisplay.innerText = "E8 ~ Pass"
        e8Song.play()
    }
    else if (score >= 45 && score <= 49){
        userDisplay.innerText = "D ~ Pass"
        d_Song.play()
    }
    else if (score >= 50 && score < 54){
        userDisplay.innerText = "C6 ~ Credit"
        c6Song.play()
    }
    else if (score >= 55 && score < 59){
        userDisplay.innerText = "C5 ~ Credit"
        c5Song.play()
    }
    else if (score >= 60 && score <= 64){
        userDisplay.innerText = "C4 ~ Distinctive"
        c4Song.play()
    }
    else if (score >= 65 && score <= 69){
        userDisplay.innerText = "B3 ~ Good"
        b3Song.play()
    }
    else if (score >= 70 && score <= 79){
        userDisplay.innerText = "B2 ~ Very Good"
        b2Song.play()
    }
    else if(score >= 80 && score <= 100){ 
        userDisplay.innerText = "A1 ~ Excellent"
        a1Song.play()
    }else{
        userDisplay.innerText = "Not a valid score"
    }
}