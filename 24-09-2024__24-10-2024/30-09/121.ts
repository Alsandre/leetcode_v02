// The problem challanges us to find a pair in ascending order
// that has the highest difference
// we should consider all valid pair
// and choose most appropriate of them

// algo:

// step 1 - create variable diff and set it to 0
// step 2 - for each element in a list
// step 3 - find difference of element to all remaining elements
// step 4 - if result is higher than diff, reassign difference to diff
// step 5 - return diff

function maxProfit(prices: number[]): number {
    let diff = 0;
    for(let i=0; i<prices.length-1; i++){
        for(let j=i+1; j<prices.length; j++){
            let curDiff = (prices[i]-prices[j])
            if(curDiff > diff) diff = curDiff
        }
    }

    return diff
};