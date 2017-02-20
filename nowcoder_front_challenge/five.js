/**
 * Created by CatM on 2017/2/20.
 */
// 数组去重
// 在比较过程中涉及对象,直接拿两个对象来相比无论是==或是===都是不相等的
// 在比较过程中涉及NaN,==或是===不能处理NaN的相等性判断,比较科学的方法是isNaN()
Array.prototype.uniqone = function() {
  var ret = [];
  var flag = false; // 用来判断NaN，一旦存在一个NaN,就置为true,这里没有做对{}的去重
  this.forEach(function(item){
    if(ret.indexOf(item) === -1){
      if(item === item || !flag){
        if(item !== item){
          flag = true;
        }
        ret.push(item);
      }
    }
  });
  return ret;
};
console.log([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniqone());

// ES6 includes
Array.prototype.uniqtwo = function() {
  var ret = [];
  this.forEach(function(item){
    if(!ret.includes(item)){
      ret.push(item);
    }
  });
  return ret;
};
console.log([false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniqtwo());
