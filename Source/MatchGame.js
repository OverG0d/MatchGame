var xxc = document.querySelector("#XXC");
var p = document.querySelector("#p");
var Score = document.querySelector("#Score");
var Timer = document.querySelector("#Timer");
var credits = document.querySelector("#Credits");
var credit = document.querySelector("#Credit");
var howtoPlay = document.querySelector("#HowToPlay");
var how = document.querySelector("#How");
var cards = document.querySelectorAll(".Cards");
var startButton = document.querySelector("#Button1");
var explainButton = document.querySelector("#Button2");
var creditsButton = document.querySelector("#Button3");
var exitButton = document.querySelector("#Button4");
var menuButton = document.querySelector("#Button5");
var boxWin = document.querySelector(".BoxWin");
var boxLose = document.querySelector(".BoxLose");
var playAgainOne = document.querySelector("#PlayAgainOne");
var backToMenuOne = document.querySelector("#BackToMenuOne");
var playAgainTwo = document.querySelector("#PlayAgainTwo");
var backToMenuTwo = document.querySelector("#BackToMenuTwo");
var menuMusic = document.getElementById("MenuMusic");
var gameOver = document.getElementById("GameOver");
var gameTheme = document.getElementById("GameTheme");
var Pop = document.getElementById("Pop");
var countDown = document.getElementById("countDown");
var VictoryMusic = document.getElementById("VictoryMusic");
var cardIcons = [1, 1, 2, 2 , 3 ,3 ,4, 4, 5, 5, 6, 6,7,7,8,8,9,9,10,10,11,11,12,12];
var min = 1;
var sec = 59;
var millisec = 99;
var score = 0;
var matchCards = [];
var firstPick;
var secondPick;
var setTimer = setInterval(startTimer,10);
var flipped;
clearInterval(setTimer);
startButton.addEventListener("click", startGame, false);
explainButton.addEventListener("click", howToPlay, false);
creditsButton.addEventListener("click", theCredits, false);
exitButton.addEventListener("click", exitGame, false);
menuButton.addEventListener("click", backToMenu, false);
playAgainOne.addEventListener("click", startGame, false);
backToMenuOne.addEventListener("click", backToMenu, false);
playAgainTwo.addEventListener("click", startGame, false);
backToMenuTwo.addEventListener("click", backToMenu, false);
function startGame()
{   
    menuMusic.pause();
    gameTheme.play();
	flipBack();
	flipped = cards[0].style.backgroundImage;
	min = 1;
    sec = 59;
    millisec = 99;
    setTimer = setInterval(startTimer,10);
    mixCards(cardIcons);
	xxc.style.display = "none";
   startButton.style.display = "none";
   explainButton.style.display = "none";
   creditsButton.style.display = "none";
   exitButton.style.display = "none";
   menuButton.style.display = "block";
   Timer.style.display = "block";
   Timer.style.color = "purple";
   Score.style.display = "block";
   for(var i = 0;i < cards.length;i++)
   {
	cards[i].style.display = "block";
   }
   Score.innerHTML = "Score: 0";
    boxWin.style.display = "none";
	playAgainOne.style.display = "none";
	backToMenuOne.style.display = "none";
    boxLose.style.display = "none";
    playAgainTwo.style.display = "none";
	backToMenuTwo.style.display = "none";
}
function howToPlay()
{  
   xxc.style.display = "none";
   startButton.style.display = "none";
   explainButton.style.display = "none";
   creditsButton.style.display = "none";
   exitButton.style.display = "none";
   menuButton.style.display = "block";
   howtoPlay.style.display = "block";
   how.style.display = "block";
}
function theCredits()
{
   xxc.style.display = "none";
   startButton.style.display = "none";
   explainButton.style.display = "none";
   creditsButton.style.display = "none";
   exitButton.style.display = "none";
   menuButton.style.display = "block";
   credits.style.display = "block";
   credit.style.display = "block";
}
function exitGame()
{    
    
	window.close();
	
}
function backToMenu()
{
 
   gameTheme.pause();
   menuMusic.play();
   flipBack();
   xxc.style.display = "block";
   startButton.style.display = "block";
   explainButton.style.display = "block";
   creditsButton.style.display = "block";
   exitButton.style.display = "block";
   menuButton.style.display = "none";
   Timer.style.display = "none";
   Score.style.display = "none";
   credits.style.display = "none";
   credit.style.display = "none";
   howtoPlay.style.display = "none";
   how.style.display = "none";
   for(var i = 0; i < cards.length;i++)
   {
   cards[i].style.display = "none";
   }
      boxWin.style.display = "none";
	playAgainOne.style.display = "none";
	backToMenuOne.style.display = "none";
    boxLose.style.display = "none";
    playAgainTwo.style.display = "none";
	backToMenuTwo.style.display = "none";
   clearInterval(setTimer);
   score = 0;
}
   function mixCards(cardIcons)
{
    var cards = cardIcons.length;
	var randomCard;
	var placeHolder;
	while(cards)
	{
		randomCard = Math.floor(Math.random() * cards--);
	
    placeHolder = cardIcons[cards];
	cardIcons[cards] = cardIcons[randomCard];
	cardIcons[randomCard] = placeHolder;
	}
    return cardIcons;
}
function startTimer()
{
	
	 Timer.innerHTML = min;
	millisec--;
	if(sec < 10)
	{
		Timer.innerHTML = Timer.innerHTML + ":" + "0" + sec;
	}
	else if(sec >= 10)
	{
		Timer.innerHTML = Timer.innerHTML + ":" +  sec;
	}
	if(millisec < 10)
	{
		Timer.innerHTML = Timer.innerHTML + ":" + "0" + millisec;
	}
	else if(millisec >= 10)
	{
		Timer.innerHTML = Timer.innerHTML + ":" + millisec;
	}
	if(millisec < 0)
		{
         sec--;
		 millisec = 99;
		}
         if (sec < 0)
         {
            min--;
			sec = 59
			millisec = 99;
		}
		if(min <=0 && sec <= 30 && millisec <= 99)
		{
			countDown.play();
	        Timer.style.color = "red";
		}
		if(min <= 0 && sec <=0 && millisec <= 0)
		{  
	         matchCards.length = 0;
	        clearInterval(setTimer);
			Lose();
		}
}
function flipAndMatch(cardId, cardNumber)
{
  
  if (matchCards.length<2)
   { 
	   if(cardId.style.backgroundImage == flipped)
	   {
   cardId.style.backgroundImage = "url('../Image/Candy" + cardIcons[cardNumber] +  ".png')";
   if(matchCards.length === 0)
   {
	    firstPick=cardId;
		Pop.play();
		matchCards.push(cardIcons[cardNumber]);
   }
   else if(matchCards.length === 1)
   {  
		secondPick=cardId;
		Pop.play();
		if(firstPick === secondPick)
		{
			matchCards.length = 0;
		}
		if(secondPick === firstPick)
		{
			matchCards.length = 0;
		}
		matchCards.push(cardIcons[cardNumber]);
        if(matchCards[0] === matchCards[1])
		{   
			score++;
			matchCards.length = 0;
			Score.innerHTML = "Score:" + " " + score;
		}
		else
		{
			
			setTimeout(function()
			{
	    
			firstPick.style.backgroundImage = "url('../Image/XCard.png')";
			secondPick.style.backgroundImage = "url('../Image/XCard.png')";
			matchCards.length=0;
			}, 1000)
		}
		 if(score == 12)
         {
		   matchCards.length = 0;
		   clearInterval(setTimer);
	       Win();
          }
		 
   }
	 
   }
   }
}
function Win()
{    
      VictoryMusic.play();
      for(var i = 0; i < cards.length; i++)
	  {
		  cards[i].style.display = "none";
	  }
	  Timer.style.display = "none";
	  Score.style.display = "none";
	  boxWin.style.display = "block";
	  menuButton.style.display = "none";
	  playAgainOne.style.display = "block";
	  backToMenuOne.style.display = "block";
}
function Lose()
{      
		 for(var i = 0; i < cards.length; i++)
		 {
			 cards[i].style.display = "none";
		 }
		 gameOver.play();
		 boxLose.style.display = "block";
		 playAgainTwo.style.display = "block";
		 backToMenuTwo.style.display = "block";
		 Timer.style.display = "none";
	     Score.style.display = "none";
		 menuButton.style.display = "none";
}
function flipBack()
{
	score = 0;
	for(var i = 0; i < cards.length; i++)
	{
		cards[i].style.backgroundImage = "url('../Image/XCard.png')";
	}
}

