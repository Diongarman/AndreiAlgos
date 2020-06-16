function randomFloat(a,b) {
    return [a, Math.round( (Math.random()*(a-b)+b).toFixed(2) * 1e2 )/1e2];
}


function pairs(time, cuts) {
    let blocks = []
    let lowerBound = 0
    let track;
    while(cuts > 1) {
        track = randomFloat(lowerBound,time)
        blocks.push(track)
        lowerBound = track[1]
        cuts--
    }
    
    blocks.push([track[1], time])

    

    return blocks
}