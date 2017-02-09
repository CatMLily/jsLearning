/**
 * Created by CatM on 2017/2/8.
 */
// 求一个数组内的元素之和

function sum(arr) {
  return arr.reduce(function (x, y) {
    return x+y;
  });
}
//example: sum([1,2,3]);

// 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组

function square(arr) {
  var newArr = arr.splice(0);
  return newArr.map(function (x) {
    return x*x;
  });
}
