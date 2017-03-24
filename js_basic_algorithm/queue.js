/**
 * Created by CatM on 2017/3/23.
 * Javascript数据从结构与算法
 */
// 队列
function Queue(){
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
  // 向队列尾部添加几个项
  this.enqueue = function(ele) {
    items.push(ele);
  };
  // 移除队列的第一个元素
  this.dequeue = function() {
    return items.shift()
  };
  // 返回队列的第一个元素
  this.front = function() {
    return items[0];
  };
}
/**
 * 击鼓传花的小游戏
 * @param  {Array}  nameList 参与人员列表
 * @param  {Number} num      在循环中要被弹出的位置
 * @return {String}          返回赢家(也就是最后活下来的那个)
 */
function hotPotato(nameList, num) {
  var queue = new Queue();

  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  var eliminated = '';

  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminated = queue.dequeue();
    console.log(eliminated + " Get out!")
  }

  console.log(queue.dequeue());
}
hotPotato(['susan','sam','liu'], 2);