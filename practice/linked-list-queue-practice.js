// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;

    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode; this.length++;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode; this.length++
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        //O(n)
        /*let length = 0;

        if (this.head) {
            let current = this.head;

            while (current) {
                current = current.next;
                length++
            }
        }

        return length; */

        //O(1)
        return this.length
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        // Write your hypothesis on the time complexity of this method here: O(n)
        if (!this.head) {return}

        let current = this.head; let sum = 0;

        while (current) {
            sum += current.value;
            current = current.next;
        }

        return sum;
    }

    averageValue() {
        // Returns the average value of all the nodes
        // Write your hypothesis on the time complexity of this method here: O(n)
        if (!this.head) {return}

        let current = this.head; let sum = 0;

        while (current) {
            sum += current.value;
            current = current.next;
        }

        return sum / this.length;
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        // Write your hypothesis on the time complexity of this method here: O(n)
        if (!this.head) {return}
        else if (this.head && n === 0) {return this.head}

        let current = this.head; let index = 0;

        while (current) {
            current = current.next
            index++;

            if (index === n) {return current}
        }
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        // Write your hypothesis on the time complexity of this method here: O(n)

        let index = (Math.ceil(this.listLength() / 2)) - 1;
        return this.findNthNode(index);
    }

    reverse() {
        // Returns a new reversed version of the linked list
        // Write your hypothesis on the time complexity of this method here: O(n^2)
        const reversed = new SinglyLinkedList();

        if (this.length === 0) {}
        else {

            for (let i = this.listLength() - 1; i >= 0; i--) {
                let val = (this.findNthNode(i)).value;
                reversed.addToTail(val);
            }
        }

        return reversed;
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        // Write your hypothesis on the time complexity of this method here: O(n^2)
        let newHead; let indexLength = this.listLength() - 1;

        for (let i = indexLength; i > 0; i --) {

            let current = this.findNthNode(i);
            let prev = this.findNthNode(i - 1);

            current.next = prev;
            if (i === indexLength) {newHead = current}
        }

        this.head.next = null;
        this.head = newHead;
    }
}
const list = new SinglyLinkedList()


class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
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

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode; this.length++;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode; this.length++;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        // Write your hypothesis on the time complexity of this method here: O(n)

        let index = (Math.ceil(this.listLength() / 2)) - 1;
        return this.findNthNode(index);
    }

    reverse() {
        // Returns a new reversed version of the linked list
        // Write your hypothesis on the time complexity of this method here: O(n)

        const reversed = new DoublyLinkedList();

        if (this.length === 0) {}
        else {

            let current = this.tail;
            while (current) {
                reversed.addToTail(current.value);
                current = current.prev;
            }
        }

        return reversed;
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        // Write your hypothesis on the time complexity of this method here
        let current = this.tail; let newHead = current;
        let indexLength = this.listLength() - 1;

        while (current) {
            current.next = current.prev;
            current = current.prev;
        }

        this.head.next = null; this.head = newHead;
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        // Write your hypothesis on the time complexity of this method here: O(n)
        if (!this.head) {return}
        else if (this.head && n === 0) {return this.head}

        let current = this.head; let index = 0;

        while (current) {
            current = current.next
            index++;

            if (index === n) {return current}
        }
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        //O(n)
        /*let length = 0;

        if (this.head) {
            let current = this.head;

            while (current) {
                current = current.next;
                length++
            }
        }

        return length; */

        //O(1)
        return this.length
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
