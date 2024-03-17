class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Push works
    push(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            //          T
            // 99 -> <-100
        }
        this.length++;
        return this;
    }
    // Pop works
    pop(){
        if(this.length === 0) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            poppedNode.prev = null;
            this.tail.next = null;
        }
        // H        T        
        // 99 -><- 100  101(return this)
        this.length--;
        return poppedNode;
    }
    // Unshift works
    unshift(val){
        var newNode = new Node(val);
        if(this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            // H         
            // 99  -><- 100
        }
        this.length++;
        return this;
    }
    // Shift works
    shift(){
        var oldHead = this.head;
        if(this.length === 0) {
            return undefined;
        } 
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            //      H       T
            // 99  100 -><- 101
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    // Get works
    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length / 2) {
            count = 0;
            current = this.head;
            while(count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    // Set works
    set(index, val) {
        var foundedNode = this.get(index);
        if(foundedNode !== null) {
            foundedNode.val = val;
            return true;
        }
        return false;
    }
    // Insert works
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        var insertedNode = new Node(val);
        var afterNode = this.get(index);
        var beforeNode = afterNode.prev;
        beforeNode.next = insertedNode;
        afterNode.prev = insertedNode;
        insertedNode.prev = beforeNode;
        insertedNode.next = afterNode;
        //          B       İ         A
        // 99 -><- 100 -><- 101 -><- 102 -><- 103
        this.length++;
        return true;
    }
    // Remove works.
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var removedNode = this.get(index);
        var beforeNode = removedNode.prev;
        var afterNode = removedNode.next;
        afterNode.prev = beforeNode;
        beforeNode.next = afterNode;
        removedNode.next = null;
        removedNode.prev = null;
        //          B       A
        // 99 -><- 100 -><- 102
        this.length--;
        return removedNode;
    }
    // Reverse works
    reverse() {
        var count = 0;
        while(count !== this.length) {
            var poppedNode = this.pop();
            this.insert(count, poppedNode.val);
            count++;
        }
        return this;
        // 102 -><- 101 -><- 100 -><- 99
    }
}

var list = new DoublyLinkedList();
list.push('utku');
list.push('imdat');
list.push('deneme');