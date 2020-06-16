function randomInt(a,b) {
    return [a, Math.floor( (Math.random()*(a-b)+b))];
}


function pairs(time, cuts) {
    let blocks = []
    let lowerBound = 0
    let track;
    while(cuts > 1) {
        track = randomInt(lowerBound,time)
        blocks.push(track)
        lowerBound = track[1]
        cuts--
    }
    
    blocks.push([track[1], time])

    

    return blocks
}