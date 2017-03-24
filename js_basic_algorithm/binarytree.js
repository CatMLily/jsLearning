/**
 * Created by CatM on 2017/3/23.
 */
// 二叉搜索树的构造函数
function BinarySearchTree() {
  /**
   * @param {Number} key 要生成的键值
   */
  var Node = function(key) {
    this.key = key; // 键值
    this.left = null; // 左子节点
    this.right = null; // 右子节点
  };
  /**
   * 二叉树的根结点,不存在时默认为null
   */
  var root = null;
  /**
   * 插入某个键到二叉树中
   * @param {Number} key 要插入的键值
   */
  this.insert = function (key) {
    var newNode = new Node(key);
    //根结点为Null时,传入的键为根结点,否则调用insertNode函数来插入子节点
    if(root === null) {
      root = newNode;
    } else {
      insertNode(root,newNode)
    }
  };
  /**
   * 用于插入子节点。
   * @param {Node} node 根节点
   * @param {Node} newNode 要插入的节点*/
  var insertNode = function(node,newNode) {
    // 根据二叉搜索树的性质,先比较大小,比根结点大的在右边,反之在左边
    // 再判断左右子树是否已经存在,存在则以这个左/右子树为根结点,即递归调用insertNode
    if(newNode.key < node.key) {
      if(node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left,newNode);
      }
    } else {
      if(node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right,newNode);
      }
    }
  }

  // 通过中序遍历,遍历所有节点实现:
  // 中序遍历: 先遍历左子树=>根结点=>右子树
  /**
   * @param {Function} callback 获取节点后的回调函数
   */
  this.inOrderTransverse = function(callback) {
    inOrderTransverseNode(root, callback);
  };
  /**
   * 中序遍历的辅助函数,用于遍历节点
   * @param {Node} node 遍历开始的结点,默认为root
   * @param {Function} callback 获取到结点后的回调函数
   * @return {[type]} [desription]
   */
  var inOrderTransverseNode = function(node,callback) {
    // 当前结点不为null则继续递归调用
    if(node != null) {
      inOrderTransverseNode(node.left, callback);
      // 获取到结点后,调用的函数
      callback(node.key);
      inOrderTransverseNode(node.right, callback);
    }
  };
  // 回调函数,比如输出这个节点
  var printNode = function(value) {
    console.log(value);
  };
  // 先序遍历:首先访问根结点,然后是左子树,最后是右子树
  this.preOrderTranverse = function(callback) {
    preOrderTransverseNode(root,callback);
  };
  var preOrderTransverseNode = function(node, callback) {
    if(node != null) {
      callback(node.key);
      preOrderTransverseNode(node.left, callback);
      preOrderTransverseNode(node.right,callback);
    }
  };
  // 后序遍历:左子树=>右子树=>根结点
  this.postOrderTransverse = function (callback) {
    postOrderTransverseNode(root,callback);
  };
  var postOrderTransverseNode = function (node, callback) {
    postOrderTransverseNode(node.left, callback);
    postOrderTransverseNode(node.right,callback);
    callback(node.key);
  }

  // min方法:返回树中最小的值,由于二叉搜索树的性质,容易知道最左侧为最小值
  this.min = function () {
    return minNode(root);
  }
  var minNode = function(node) {
    // 如果node存在,则开始搜索。能避免根结点为null的情况。
    if(node) {
      while(node&&node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };
  // max方法,最大值在最右侧
  this.max = function() {
    return maxNode(root);
  };
  var maxNode = function(node) {
    if(node) {
      while(node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  }
  // search方法,搜索某个值,在树中则返回true实现,默认从root开始搜索
  this.search = function(key) {
    return searchNode(root,key);
  }
  var searchNode = function (node,key) {
    if(node === null) {
      return false;
    } else if (key < node.left) {
      searchNode(node.left,key);
    } else if (key > node.right) {
      searchNode(node.right,key);
    } else {
      // 如果该节点等于传入的值,返回true
      return true;
    }
  };
  // remove方法,从树中移除某个键,有以下几种情况
  // 只是一个叶子结点
  // 有一个子节点
  // 有两个子节点
  this.remove = function(key) {
    root = removeNode(root, key);
  };
  /**
   * @param {Node} node 搜索开始的节点,默认为root
   * @param {Key} key 要移除的键值
   * @return {Boolean} 移除成功返回true 失败为false*/
  var removeNode = function(node,key) {
    // 如果根结点不存在,则直接返回null
    if (node === root) {
      return null;
    }
    // 未找到结点前,继续递归调用
    if(key < node.left) {
      node.left = removeNode(node.left,key);
      return node;
    } else if(key > node.right) {
      node.right = removeNode(node.right,key);
      return node;
    } else {
      // 第一种情况,只是叶子结点,只要将该节点赋值为null即可
      if(node.left === null && node.right === null) {
        node = null;
        return node;
      }
      //第二种情况,有一个子节点,如果左结点为null,就说明右节点存在。于是把当前结点赋值为存在的那个子节点
      if(node.left === null) {
        node = node.right;
        return node;
      }
      // 第三种情况,有两个子节点。首先加入辅助结点,同时寻找右结点中的最小节点。
      // 并把当前结点替换为右子节点中的最小结点,同时为了避免结点重复,移除右子节点中的最小结点。
      var aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  };
  var findMinNode = function(node) {
    if (node) {
      while(node && node.left !== null) {
        node = node.left;
      }
      return node;
    }
    return null;
  };
}
var tree = new BinarySearchTree();

tree.insert(1);
tree.insert(4);
tree.insert(7);
tree.insert(6);
tree.insert(8);
tree.insert(2);



console.log(tree.search(1) ? "key 1 find" : "key 1 not find");
console.log(tree.search(22) ? "key 22 find" : "key 22 not find");