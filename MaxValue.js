/*
 Prompt:
  Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

  Solve this without using any built-in array methods.

  You can assume that the array is non-empty.

  maxValue([4, 7, 2, 8, 10, 9]);

  maxValue([-5, -2, -1, -11]);

  My Soultion:

  const maxValue = (nums) => {
  let maxNum = -Infinity;
  for(let i = 0; i < nums.length;i++){
    if(nums[i] > maxNum){
      maxNum = nums[i];
      console.log(nums[i])
    }
  }
 return maxNum;
};


Struct Solution:

const maxValue = (nums) =>{

  let maximum = -Infinity;

  for(let num of nums){
    if(num > maximym){
      maximym = num;
    }
  }
  return maximum;
}


Set maximum to negative infinity to guareentee that any number is greater than negative infinity

using for of loop, bc we are looping thru elements and not indicies

if the current element is greater than the maximum replace it with that element. ie:

-Infinity => 4 => 7 => 8 => 10

then after the loop completes, the returned value of that function is whatever maximum is
























 */
