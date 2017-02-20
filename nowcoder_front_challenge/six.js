/**
 * Created by CatM on 2017/2/20.
 */
// 裴波那契数列
function fibonacci(n) {
  if(n==0) return 0;
  if(n==1) return 1;
  if(n>1) return fibonacci(n-1)+fibonacci(n-2);
}