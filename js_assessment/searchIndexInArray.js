/**
 * Created by CatM on 2017/2/8.
 */
// 找出元素 item 在给定数组 arr 中的位置
function indexOf(arr, item) {
  return arr.indexOf(item);
}
// example: indexOf([ 1, 2, 3, 4 ], 3)

// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
function findAllOccurrences(arr, target) {
  var indexList = [];
  var idx = arr.indexOf(target);
  while(idx !== -1){
    indexList.push(idx);
    // 从此位置的下一个开始查找target
    idx = arr.indexOf(target, idx+1);
  }
  return indexList;
}
