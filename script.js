var playing = false;
var score;
var action;
var time_remaining;
var correctAns
//if we click on the start/reset button
document.getElementById("start-reset").onclick=function(){
  // if we are playing
  if(playing==true) {
    location.reload(); // reload page
  }else {//if we are not playing
    score=0; //set score to 0
    document.getElementById("score-value").innerHTML=score;
    show("remain-time"); //show countdown box
    time_remaining=60;
    document.getElementById("time-value").innerHTML=time_remaining;
    hide("game-over");
    document.getElementById("start-reset").innerHTML="Reset Game";
    playing=true;
    
    //start countdown
    startCountdown();
    generateQA();
  }

}
for(i=1; i<5; i++){
  document.getElementById("box"+i).onclick=function(){
    if(playing==true){
      if(this.innerHTML==correctAns){
        score++;
        document.getElementById("score").innerHTML=score;
        hide("wrong");
        show("correct");
        setTimeout(function(){
          hide("correct");
        },1000);
        generateQA();
      }
      else {
        hide("correct");
        show("wrong");
        setTimeout(function(){
          hide("wrong");
        },1000);
      }
    }
  }
}
function startCountdown(){
  action=setInterval(function(){
    time_remaining--;
    document.getElementById("time-value").innerHTML=time_remaining;
    if(time_remaining==0){//game over
      stopCountdown();
      show("game-over");
      document.getElementById("game-over").innerHTML=("<p>GAME OVER!</p><p>Your score is "+score+"</p>");
      hide("remain-time");
      hide("correct");
      hide("wrong");
      playing=true;
      document.getElementById("start-reset").innerHTML="Start Game";
    }
  },1000)
}
function stopCountdown(){
  clearInterval(action);
}
function hide(_Id){
  document.getElementById(_Id).style.display="none";
}
function show(_Id){
  document.getElementById(_Id).style.display="block";
}
function generateQA(){
  var x=1+Math.round(9*Math.random());
  var y=1+Math.round(9*Math.random());
  correctAns= x*y;
  document.getElementById("question").innerHTML=x+"x"+y;
  var correctPosition= 1+Math.round(3*Math.random());
  document.getElementById("box"+correctPosition).innerHTML=correctAns;
  var answers=[correctAns];
  for(i=1; i<5; i++){
    if(i!=correctPosition){
      var wrongAns;
      do{
        
          wrongAns=1+Math.round(9*Math.random())*1+Math.round(9*Math.random());
       
        
      }
      while(answers.indexOf(wrongAns)>-1)
      document.getElementById("box"+i).innerHTML=wrongAns; 
      answers.push(wrongAns);
    }
  }
  
}