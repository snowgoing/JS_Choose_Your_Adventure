var a = prompt("Welcome to The Game. All answers must be given in the form of a lowercase yes or a lowercase no. Do you understand?")

if (a === "yes") {
    var b = prompt("Good. Now, first things first. Are you alone?");
    if (b === "yes") {
        var d = prompt("I know. Would you like to know how I know?");
        if (d === "yes") {
            var e = prompt("Because I'm watching you. Would you like to know how I'm watching you?");
            if (e === "yes") {
                alert("I bet you'd like to know. Well, I'm not tellin so see ya later.");
            } else {
                alert("Well, what the hell? Just forget it. I'm going home.");
            }
        } else {
            alert("Well, that's just weird.");
        }
    } else {
        var z = prompt("Are they looking at you?");
        if (z === "yes") {
            var y = prompt("Do you feel uncomfortable?");
            if (y === "yes") {
                alert("Maybe you have an anxiety disorder.");
            } else {
                alert("Well, they're talking about you when you're not around so maybe you should feel a little uncomfortable.");
            }



        } else {
            alert("Good. Now, slowly sit on the floor and cover your head.");
        }
    }
} else {
    alert("Then get the hell out of here.");

}
