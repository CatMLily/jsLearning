/**
 * Created by CatM on 2017/2/18.
 */
// 查找两个节点的最近的一个共同父节点，可以包括节点自身
/**
 * 思考:三种情况,
 * oNode1包含了oNode2
 * oNode2包含了oNode1
 * oNode1和oNode2是同级的,因此拥有共同的父节点
 * */
function commonParentNode(oNode1, oNode2) {
  if(oNode1.contains(oNode2)) {
    return oNode1;
  }else if(oNode2.contains(oNode1)){
    return oNode2;
  }else{
    return oNode1.parentNode;
  }
}
