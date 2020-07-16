var rob = function(nums) {
    let high = {1:0, 2:0};
    
    let score = 0

    for (let i = 0; i < nums.length; i++) {


        if (i%2 === 0) {
          high[2] += nums[i]
        } else {  
          high[1] += nums[i]
        }

    }
    
    return (high[2]>high[1]) ? high[2]:high[1]
    
};


rob([2,7,9,3,1])