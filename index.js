let plusOne =document.getElementById("plus-one")
let homeScoreText =document.getElementById("home-score-text")
let guestScoreText = document.getElementById("guest-score-text")
let score =0

function add1()
{ score += 1
homeScoreText.textContent = score
    
}

function add2()
{ score += 2
homeScoreText.textContent = score 
}

function add3 ()
{
  score += 3
homeScoreText.textContent = score   
}

function guestAdd1(){
    score += 1
     guestScoreText.textContent = score
}

function guestAdd2(){
    score += 2
    guestScoreText.textContent = score;
}

function guestAdd3() {
    score +=3
    guestScoreText.textContent = score
}