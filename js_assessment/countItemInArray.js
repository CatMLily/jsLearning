/**
 * Created by CatM on 2017/2/9.
 */
// 统计数组 arr 中值等于 item 的元素出现的次数
function countItem(arr, item) {
  var newArr = arr.filter(function (e) {
    return e === item;
  })
  return newArr.length;
}

// 找出数组 arr 中重复出现过的元素
/**
 * 思路:1.本提第一时间想到的就是js的indexOf和lastIndexOf,代表一个元素在数组中第一次出现的位置和最后
 * 一次出现的位置,如果这两者不相等就说明是重复的,这时候将它放入新数组,同时用indexOf判断新数组里是否
 * 有这个元素,没有为-1,则push进新数组*/
function duplicatesItems(arr) {
  var newArr = [];
  for(var i = 0;i < arr.length;i++){
    if((arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) && newArr.indexOf(arr[i]) == -1){
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}