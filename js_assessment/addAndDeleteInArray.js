/**
 * Created by CatM on 2017/2/8.
 */
// 在数组的最后一位添加元素,使用新数组返回
function append(arr, item) {
  var myArray = arr.slice(0);
  myArray.push(item);
  return myArray;
}

// 删除数组最后一位元素,使用新数组返回
function truncate(arr) {
  var  myArray = arr.slice(0);
  myArray.pop();
  return myArray;
}

// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
// 使用concat 返回的就是新数组
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
function prependOne(arr, item) {
  var myArray = arr.slice(0);
  return [item].concat(myArray);
}

// 使用unshift
function prependTwo(arr, item) {
  var myArray = arr.slice(0);
  myArray.unshift(item);
  return myArray;
}

// 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
function curtail(arr) {
  var myArr = arr.slice(0);
  myArr.splice(0,1);
  return myArr;
}

// 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
// 使用concat
function concatOne(arr1, arr2) {
  var newArr1 = arr1.slice(0);
  var newArr2 = arr2.slice(0);
  return newArr1.concat(newArr2);
}
/**
 * 设想使用push方法,因为arr.push[item],会得到一个新数组[arr,item];
 * 但是若是arr push的是一个数组,那么得到的是[arr,[item]],有悖于题设;
 * 网上翻找了一些资料,居然真的有关这方面的,用的还是之前有点疑惑的apply和call系列;
 * Array.prototype.push.apply(arr1,arr2);
 * 可以理解为,arr1调用了push方法,apply将arr2通过转换为参数列表的集合传递进去
 * */
function concatTwo(arr1, arr2) {
  var newArr1 = arr1.slice(0);
  Array.prototype.push.apply(newArr1, arr2);
  return newArr1;
}

// 在数组的某个index处插入item元素,返回新数组
function insert(arr, item, index) {
  var newArr = arr.slice(0);
  newArr.splice(index,0,item);
  return newArr;
}