/**
 * Created by CatM on 2017/2/9.
 */
/**
 * 关于call和apply的总结
 * 1.call和apply都是在指定的this值和参数的情况下调用某个函数
 * 2.apply的参数以数组或类数组对象、call是接受若干个参数
 * 3.call和apply都是为了改变函数运行的上下文而存在的
 * obj.call(thisObj, arg1, arg2, ...);
 * obj.apply(thisObj, [arg1, arg2, ...]);
 * 两者作用一致，都是把obj(即this)绑定到thisObj，这时候thisObj具备了obj的属性和方法。
 * 或者说thisObj继承了obj的属性和方法。
 */
// 1.将数组 arr 中的元素作为调用函数 fn 的参数
function argsAsArray(fn, arr) {
  return fn.apply(this,arr);
}

// 函数的上下文
// 2.将函数 fn 的执行上下文改为 obj 对象
function speak(fn, obj) {
  return fn.apply(obj,obj);
}

// 3.实现函数 functionFunction，调用之后满足如下条件：
// 返回值为一个函数 f
// 调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
// 所有函数的参数数量为 1，且均为 String 类型
/**
 * 基本思路
 * 首先fF返回的是一个函数,这个函数返回的是fF的参数+","+f自己要传入的参数*/
function functionFunction(str) {
  var fF = function (str2) {
    return str+','+str2;
  };
  return fF;
}

// 4.实现函数 makeClosures，调用之后满足如下条件：
// 返回一个函数数组 result，长度与 arr 相同
// 运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同
/**
 * 本题主要知识点在于函数的闭包
 * 闭包是指有权访问另一个函数作用域中变量的函数,常见形式是在一个函数中创建另一个函数
 * 但是在es6之前的作用域链的机制,【闭包只能取得包含函数中变量的最后一个值】,所以对于本题来说
 * 我们要得到的是一个数组函数,并且需要遍历数组里的每一个值,因此
 * 这里没有直接把闭包赋值给数组,而是定义了一个匿名函数,参数为num为函数最终要要返回结果所需的,
 * 将立即执行该函数的结果赋值给数组
 * */
function makeClosures(arr,fn){
  var result = new Array();
  for(var i = 0; i < arr.length; i++ ){
    result[i] = function (num) {
      return function () {
        return fn(num);
      };
    }(arr[i]);
  }
  return result;
}
var arr = [1, 2, 3];
var square = function (x) {
  return x * x;
}
var funcs = makeClosures(arr, square);

/**
 * 在es6中,由于存在块级作用于,因此上面的函数可以改写为*/
function makeClosuresTwo(arr,fn){
  var result = new Array();
  for(let i = 0; i < arr.length; i++ ){
    result[i] = function () {
        return fn(arr[i]);
    };
  }
  return result;
}

// 5.已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
// 返回一个函数 result，该函数接受一个参数
// 执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致
function partial(fn, str1, str2){
  var result = function (str3) {
    return fn(str1, str2, str3);
  }
  return result;
}
// 测试用例
var sayIt = function(greeting, name, punctuation) {
  return greeting + ', ' + name + (punctuation || '!');
};
console.log(partial(sayIt, 'Hello', 'Ellie')('!!!'));

// 6.函数 useArguments 可以接收 1 个及以上的参数。
// 请实现函数 useArguments，返回所有调用参数相加后的结果。
// 本题的测试参数全部为 Number 类型，不需考虑参数转换。
// 主要考点为函数的arguments参数(一个类数组对象)
function useArguments() {
  var sum = 0;
  for( var i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

// 7.实现函数 callIt，调用之后满足如下条件
// 返回的结果为调用 fn 之后的结果
// fn 的调用参数为 callIt 的第一个参数之后的全部参数
/**
 * 两种形式实现
 * 一种是使用ES6新引入的rest参数
 * 还有种是使用将arguments类数组对象使用slice方法转换成去除第一个元素的数组
 * 参考文献:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 * Array-like objects*/
function callIt(fn, ...rest) {
  return fn.apply(this, rest);
}
function callItTwo(fn) {
  var result = Array.prototype.slice.call(arguments,1);
  return fn.apply(this, result);
}

// 8.实现函数 partialUsingArguments，调用之后满足如下条件：
// 返回一个函数 result
// 调用 result 之后，返回的结果与调用函数 fn 的结果一致
// fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
function partialUsingArguments(fn) {
  var rest = Array.prototype.slice.call(arguments,1);
  var result = function () {
    return fn.apply(this,rest.concat(Array.prototype.slice.call(arguments)));
  }
  return result;
}
// 测试用例
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var test = function (first, second, third, forth) {
  return first + second + third + forth;
};
console.log(partialUsingArguments(test, a, b)(c, d));

// 9.函数的柯里化
// 已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
// 返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
// 调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
// 调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
// 调用 c 之后，返回的结果与调用 fn 的返回值一致
// fn 的参数依次为函数 a, b, c 的调用参数
/**
 * 柯里化是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，
 * 并且返回接受余下的参数且返回结果的新函数的技术,
 * 在看到题设前,我还不了解柯里化是什么,所以一开始用的实现方式是递归,感觉递归的执行效率没那么理想*/
// 1.递归
function curryItOne(fn){
  var a = function(str1){
    return function (str2) {
      return function (str3) {
        return fn.call(this,str1,str2,str3);
      }
    }
  };
  return a;
}
// 2.柯里化编程
function curryIt(fn){
  var arrs = [];
  var n = fn.length;
  var myFun = function(arr){
    arrs.push(arr);
    if(arrs.length < n){
      return myFun(arr);
    }else{
      return fn.apply(this,arrs);
    }
  }
}

// 10.将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值
function alterContext(fn, obj) {
  return fn.call(obj);
}

// 11.给定一个构造函数 constructor，请完成 alterObjects 方法，
// 将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。
// 知识点:原型,原型链
function alterObjects(constructor, greeting) {
  constructor.prototype.greeting = greeting;
}

// 12.找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
// 返回数组，格式为 key: value
// 结果数组不要求顺序
// 知识点:hasownproperty/isPrototypeOf
/**
 * hasOwnProperty() 方法会返回一个布尔值，其用来判断某个对象是否含有指定的属性
 * 所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。
 * 这个方法可以用来检测一个对象是否含有特定的自身属性；
 * 和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。*/
function iterate(obj) {
  var arr = [];
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      arr.push(key+': '+obj[key]);
    }
  }
  return arr;
}
