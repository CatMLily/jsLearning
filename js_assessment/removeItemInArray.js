/**
 * Created by CatM on 2017/2/8.
 */
// 移除数组中所有为item的元素,不要改变原来数组,用新数组代替返回
// 牛客的测试页似乎不支持ES6?
// 方法1:splice()
function removeOne(arr,item) {
  let len = arr.length;
  // 给新数组返回原数组
  let myArray = arr.slice();
  for(let i = 0;i < len;i++) {
    if(myArray[i] === item){
      myArray.splice(i,1);
      i--;
    }
  }
  return myArray;
}

// 方法2: filter()
function removeTwo(arr,item) {
  var myArray = arr.slice(0);
  return myArray.filter(function (e) {
    return e !== item;
  });
}

// 移除数组中所有为item的元素,用原数组代替返回
/**
 * 不能再使用filter方法,因为filter方法本身就是返回的一个新数组
 * filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组
*/

// splice()
function removeThree(arr,item) {
  var len = arr.length;
  for(var i = 0;i < len;i++) {
    if(arr[i] === item){
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}
