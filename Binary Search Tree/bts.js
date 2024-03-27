class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BTS {
    constructor() {
        this.root = null;
    }
    // Works
    insert(value) {
        var newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true) {
            if(value === current.value) {
                return undefined;
            }
            if(value < current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    // Works
    find(value) {
        if(this.root === null) {
            return undefined;
        }
        var current = this.root;
        var found = false;
        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) {
            return undefined;
        };
        return current;
    }
    // Works
    BFS() {
        var node = this.root, data = [], queue = [];
        queue.push(node);

        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
        return data; // [10, 5, 13, 2, 7, 11, 16]
    }
    // Works
    DFS_Pre_Order() {
        var data = [];
        var current = this.root;
        function traverse(node) {
            data.push(node.value);
            if(node.left) {
                traverse(node.left);
            }
            if(node.right) {
                traverse(node.right);
            }
        }
        traverse(current);
        return data; // [10, 5, 2, 7, 13, 11, 16]
    }
    // Works
    DFS_Post_Order() {
        var data = [];
        function traverse(node) {
            if(node.left) {
                traverse(node.left);
            }
            if(node.right) {
                traverse(node.right);
            }
            data.push(node.value);
        }
        traverse(this.root);
        return data; // [2, 7, 5, 11, 16, 13, 10]
    }
    // Works
    DFS_In_Order() {
        var data = [];
        function traverse(node) {
            if(node.left) {
                traverse(node.left);
            }
            data.push(node.value);
            if(node.right) {
                traverse(node.right);
            }
        }
        traverse(this.root);
        return data; // [2, 5, 7, 10, 11, 13, 16]
    }
    // Works
    findSecondLargest() {
        var current = this.root;  
        if(current === null) return undefined;
        while(current.right) {
            if(current.right.right === null) {
                return current.value;
            }
            current = current.right;
        }
    }
}
//          10
//      5       13
//    2   7   11   16

var tree = new BTS();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);