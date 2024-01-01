var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        MakeSound(buttonInnerHTML);
        animateButtonClick(this);
    });
}

  $("keydown", function (event) {
    MakeSound(event.key);
    var button = document.querySelector(".drum" + event.key);
    if (button) {
        animateButtonClick(button);
    }
});

        function MakeSound(key) {
            switch (key) {
                case "1":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
                case "2":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
                case "3":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
                case "4":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
                case "5":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
                case "6":
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;
                case "7":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
                default:
                    break;
            }
        } 
       
        function animateButtonClick(button) {
            button.classList.add("pressed");
            setTimeout(function () {
                button.classList.remove("pressed");
            }, 100);
        }




