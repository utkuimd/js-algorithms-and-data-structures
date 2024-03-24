class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // Works
    push(val) {
        var newNode = new Node(val);
        if(this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            // F        
            // 98 -> 99 100 101
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    // Works
    pop() {
        if(!this.first) {
            return null;
        }
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        // T     F   
        // 98 -> 99 100 101
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            //               LNN
            // 99 100 101 -> 102
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
}

var stack = new Stack();
var queue = new Queue();