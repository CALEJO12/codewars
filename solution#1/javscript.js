function shark(pontoonDistance, sharkDistance, yourSpeed, sharkSpeed, dolphin){
    let shark = sharkDistance / sharkSpeed
    const you = pontoonDistance / yourSpeed

    if(dolphin){
        shark = sharkDistance / (sharkSpeed / 2);
        if(you < shark) {
            console.log("Alive!");
        } else {
            console.log("Shark Bait!")
        }
    } else {
        if(you < shark) {
            console.log("Alive!");
        } else {
            console.log("Shark Bait!")
        }
    }
}

shark(100, 200, 10, 20, false)