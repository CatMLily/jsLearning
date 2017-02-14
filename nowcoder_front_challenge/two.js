/**
 * Created by CatM on 2017/2/14.
 */
// 获取 url 中的参数
// (1)指定参数名称，返回该参数的值 或者 空字符串
// (2)不指定参数名称，返回全部的参数对象 或者 {}
// (3)如果存在多个同名参数，则返回数组
// 比如 getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key')
// 返回[1,2,3]
/**
 * 这里主要知识点在于正则表达式的综合利用,有多种解法
 * 这里采用的是string的replace方法,自己一开始的思路里没有想到正则表达式,想的是字符串分割,存入一个对象中
 * 对象中的属性名为参数名(不重复),值为该参数的值,是一个字符串或者一个数组
 * 后来发现这个做法远没有讨论区的正则方法好,回顾了一下replace方法,并使用了它,*/
function getUrlParam(sUrl, sKey) {
  // 结果集
  var result = {};
  // 匹配的字符串
  var t = /(\w+)=(\w+)&?/g;
  //a代表模式的匹配项，k代表$1,v代表$2,即正则里面的分组，1是第一组
  sUrl.replace(t,function (a,k,v) {
    if(result[k] !== undefined){
      // 如果result对象中已经存在k这个属性,则把第一次存在的值给t,将后来的值和之前的值组成一个数组
      var t = result[k];
      result[k] = Array.prototype.concat(t,v);
    }else{
      // result对象中不存在k这个属性的时候，就添加这个属性，并为他赋值为v即 result={k: v}
      result[k] = v;
    }
  });
  if(sKey === undefined){
    return result;
  }else{
    return result[sKey] || '';
  }
}
console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'test'));

// 方法2 使用exec()方法
// 正则里的exec()方法是为指定的一段字符串执行搜索匹配操作，返回值是一个数组或者null，所以也可以尝试用它来试验一下这个题
// 如果成功匹配，exec 方法返回一个数组，并且更新正则表达式对象的属性。返回的数组包括匹配的字符串作为第一个元素，紧接着一个元素对应一个成功匹配被捕获的字符串的捕获括号
// 详情可以参见mdn上exec()中的那张表格
function getUrlParamTwo(sUrl, sKey) {
  var result = {};
  var t = /(\w+)=(\w+)&?/g;
  var match;
  while(match = t.exec(sUrl)){
    var k = match[1];
    var v = match[2];
    if(result[k] !== undefined){
      var temp = result[k];
      result[k] = Array.prototype.concat(temp,v);
    }else{
      result[k] = v;
    }
  }
  if(sKey === undefined){
    return result;
  }else {
    return result[sKey] || '';
  }
}