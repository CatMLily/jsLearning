/**
 * Created by CatM on 2017/2/9.
 */
// 1.给定的 js 代码中存在全局变量，请修复
// function globals() {
//   myObject = {
//     name : 'Jory'
//   };
//
//   return myObject;
// }
/**
 * js中没有使用var let等声明变量的,会被认为是全局变量
 * 修改如下
 * */
function globals() {
  var myObject = {
    name : 'Jory'
  };

  return myObject;
}

// 请修复给定的 js 代码中，函数定义存在的问题
// function functions(flag) {
//   if (flag) {
//     function getValue() { return 'a'; }
//   } else {
//     function getValue() { return 'b'; }
//   }
//
//   return getValue();
// }
/**
 * 主要点在于函数声明和函数表达式
 * JavaScript 解释器中存在一种变量声明被提升（hoisting）的机制，
 * 也就是说变量（函数）的声明会被提升到作用域的最前面，即使写代码的时候是写在最后面，也还是会被提升至最前面。
 * 用 var 声明的变量都会被提升，只不过是被先赋值为undefined
 * 题设中如此定义,getValue也没有块级作用于,因此同名定义会被覆盖,即getValue函数被重写
 * */
function functions(flag) {
  if (flag) {
    var getValue = function () { return 'a'; }
  } else {
    var getValue = function () { return 'b'; }
  }

  return getValue();
}

// 修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例
// parse2Int('12'); parse2Int('12px'); parse2Int('0x12') => 12; 12; 0
// function parse2Int(num) {
//   return parseInt(num);
// }
/**
 * 此题主要知识点在于parseInt(string,radix)
 * 主要是考虑radix最好不要省略,因为在它省略的情况下,看0x/0X为十六进制,0为八进制等
 * radix指定情况下就不会出现这种不定的情况,指定radix=10,那么就认为第一个参数是十进制来看的
 * */
function parse2Int(num) {
  return parseInt(num,10);
}

