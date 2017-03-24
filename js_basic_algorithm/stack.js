/**
 * Created by CatM on 2017/3/23.
 */
// 实现十进制转二进制,不用自带的方法Number.prototype.toString()方法
// 栈的构造函数
function Stack(){
  var items = [];
  // 往栈添加新元素
  this.push = function(element) {
    items.push(element);
  };
  // 把栈顶元素弹出
  this.pop = function() {
    return items.pop();
  };
  // 查看栈顶元素
  this.peek = function() {
    return items[items.length - 1];
  }
  // 检查是否为空
  this.isEmpty = function() {
    return items.length === 0
  };
  // 清空栈
  this.clear = function() {
    items = [];
  };
  // 栈大小
  this.size = function() {
    return items.length;
  };
  // 以字符串方式输出
  this.print = function() {
    console.log(items.toString());
  };
}
function divideBy2(decNumber) {
  var
    remStack = new Stack(),
    rem,
    binaryString = '';
  while(decNumber > 0) {
    rem = Math.floor(decNumber%2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber/2);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
};
console.log(divideBy2(101.2));