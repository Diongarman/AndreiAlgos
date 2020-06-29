function randomInt(a,b) {
    return [a, Math.floor(Math.random() * (b - (a+1)) + (a+1))];
}

function pairs(time, cuts) {
    let blocks = []
    let lowerBound = 0
    let track;
    while(cuts > 1) {
   
        console.log('pick an upper bound between',lowerBound, time - (cuts-1))
        
        track = randomInt(lowerBound,time - (cuts-1))
        // track = randomInt(lowerBound,time)
        blocks.push(track)

        lowerBound = track[1]
        cuts--
    }

    blocks.push([track[1], time])

    return blocks
}

pairs(20,10)