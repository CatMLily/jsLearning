/**
 * Created by CatM on 2017/2/20.
 */
// 根据包名，在指定空间中创建对象
// 根据输出和题目描述得出：参数二字符串转为字符串数组后，
// 若是数组元素在参数1中存在并且是对象，则不需要改变，如果不存在或者不为对象
// 则需要创建其为一个空对象
var namespace = function(oNamespace, sPackage) {
  var arr = sPackage.split('.');
  var obj = oNamespace;
  for(var i = 0; i < arr.length; i++){
    if(!obj[arr[i]] || typeof obj[arr[i]] !== 'object'){
      obj[arr[i]] = {};
    }
    obj = obj[arr[i]];
  }
  return oNamespace;
};
console.log(namespace({a: {test: 1, b: 2}}, 'a.b.c.d'));