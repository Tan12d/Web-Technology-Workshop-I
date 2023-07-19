var item = {
    stone: 0,
    paper: 1,
    scissor: 2
}

console.log(item);

for (let i = 0; i < 10; i++) 
{
    var a = prompt("Enter your number:")//User input
    console.log(a)

    var b = Math.floor(Math.random() * 3);//Computer Input

    if ((a == 0 && b == 0) || (a == 1 && b == 1) || (a == 2 && b == 2)) {
        console.log("Tie");
    }

    else if (a == 0 && b == 1) {
        console.log("User won")
    }

    else if (a == 1 && b == 0) {
        console.log("Computer won")
    }

    else if (a == 2 && b == 1) {
        console.log("User won")
    }

    else if (a == 1 && b == 2) {
        console.log("Computer won")
    }

    else if (a == 0 && b == 2) {
        console.log("User won")
    }

    else if (a == 2 && b == 0) {
        console.log("Computer won")
    }
}





