// (2) Find All Numbers Disappeared in an Array (Logic Test)

/*
  Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

  Constraints:
  * n == nums.length
  * 1 <= n <= 105
  * 1 <= nums[i] <= n
  
  Examples:
  const nums = [4,3,2,7,8,2,3,1]
  findDisapperared(nums)  ➞ [5,6]
  
  const nums = [1,1]
  findDisapperared(nums)  ➞ [2]
*/

const findDisapperared = (arrNum) => {
  let result = []
  
  for (let i=0; i<arrNum.length; i++){
    if (!arrNum.includes(i+1)){
      result.push(i+1)
    }
  }

  return result
};

let nums = [4,3,2,7,8,2,3,1]
console.log(findDisapperared(nums)) // ➞ [5,6]
  
nums = [1,1]
console.log(findDisapperared(nums)) // ➞ [2]
