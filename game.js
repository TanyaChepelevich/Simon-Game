const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern =[];
let level = 0;
const title = $('h1');
const started = false;

$(window).one('keydown',(function() { 
           nextSequence();
           checkAnswer(level);
    }
))

$(".btn").click(function() {
    let userChosenColor = this.id;
    playSound(userChosenColor);
    animatePress(userChosenColor);
    userClickedPattern.push(userChosenColor);
})

const nextSequence = function() {
    level ++;
    title.text(`Level ${level}`);
    const randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColours[randomNumber];
    animatePress(randomChosenColor);
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);
    
}

const playSound = function(sound) {
    new Audio(`sounds/${sound}.mp3`).play();
}

const animatePress = function(currentColor) {
    $('#'+currentColor).addClass('pressed');
    setTimeout(function() {
        $('#'+currentColor).removeClass('pressed');
    }, 100)
}

const checkAnswer = function(currentLavel) {
    gamePattern.forEach((color, indx) => {
        if (color ===userClickedPattern[indx]) {
            console.log(color + ' true');
        }
    } )
}
