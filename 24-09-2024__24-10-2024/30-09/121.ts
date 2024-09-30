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

function _maxProfit(prices: number[]): number {
  let diff = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let curDiff = prices[i] - prices[j];
      if (curDiff > diff) diff = curDiff;
    }
  }

  return diff;
}

// Works in general but inefficient

// I have tried using gpt as tutor to guide me to optimised solution.
// despite giving good hints I still cant figure out how EXACTLY algorithm works
// but optimised solution looks like this:

// algo:
// step 1 - create variables curMin (set it to first element in a  list) and maxProfit set it to 0
// step 2 - iterate over list
// step 3 - for each element if it is new minimum updater curMin, calculate new profit and update if it is greater

function __maxProfit(prices: number[]): number {
  let curMin = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    let diff = prices[i] - curMin;
    if (prices[i] < curMin) curMin = prices[i];
    if (diff > maxProfit) maxProfit = diff;
  }

  return maxProfit;
}

// the algorithm workns with O(n) comlexity and thats most we can get out of single pass algorithm
// operations per iteration can be optimized a bit though
// in current loop I do calculate difference for each price
// but lets consider that there are entries that does not yield any profit
// so if current price is greater then current min price no point calculating difference
// although since curMin is storing first element there is no point starting at 0


// same algorithm, but operations are optimized

function maxProfit(prices: number[]): number {
    let curMin = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < curMin){
        curMin = prices[i]
      }else {
        let diff = prices[i] - curMin
        if(diff > maxProfit){
            maxProfit = diff
        }
      }
    }
  
    return maxProfit;
  }
  
  console.log(maxProfit([15, 20, 5, 40, 1, 5, 25]));

  // 99% memory and 74% runtime. not bad