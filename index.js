function play(mp3_file) {
    var audio = new Audio(mp3_file);
    audio.play();
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    keyAnimation(event.key);
})


function makeSound(key){

    switch (key) {
        case "1":
            var k1 = new Audio("./sounds/e(high).mp3");
            k1.play();
            break;
        case "2":
            var k2 = new Audio("./sounds/b.mp3");
            k2.play();
            break;
        case "3":
            var k3 = new Audio("./sounds/g.mp3");
            k3.play();
            break;
        case "4":
            var k4 = new Audio("./sounds/d.mp3");
            k4.play();
            break;
        case "5":
            var k5 = new Audio("./sounds/a.mp3");
            k5.play();
            break;
        case "6":
            var k6 = new Audio("./sounds/e(low).mp3");
            k6.play();
            break;

        default:
            break;
    }
}

function keyAnimation(currentKey){
    var pressedString = document.querySelector(".string"+currentKey);
    pressedString.classList.add("pressed");
    
    setTimeout(function(){ 
        pressedString.classList.remove("pressed");
    }, 100);
}