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
