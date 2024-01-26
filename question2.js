function twosum(nums,target){
    const numIndices = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if (complement in numIndices) {
            return [numIndices[complement], i];
        }

        numIndices[num] = i;
    }
}



const num=[2,7,11,15];
const target=9;
console.log(twosum(num,target));
