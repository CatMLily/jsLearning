/**
 * Created by CatM on 2017/2/14.
 */
// 1.封装函数 f，使 f 的 this 指向指定的对象
/**
 * 有关apply和call*/
function bindThis(f, oTarget) {
  return function () {
    return f.apply(oTarget,arguments);
  }
}