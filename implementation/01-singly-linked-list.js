// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const node = new SinglyLinkedNode(val);

        node.next = this.head;

        this.head = node;
        this.length++;

        return this;

        // Write your hypothesis on the time complexity of this method here - O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here - O(n)
        // Add node of val to tail of linked list

        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        // Write your hypothesis on the time complexity of this method here - O(1)

        if (this.length === 0) {return}
        let prevHead = this.head;

        this.head = this.head.next
        this.length--

        return prevHead;
    }

    removeFromTail() {
        // Remove node at tail
        // Write your hypothesis on the time complexity of this method here - O(n)
        if (this.length === 0) {return}
        else if (this.length === 1) {
            let removed = this.head;
            this.head = null; this.length--;
            return removed;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next
        }

        let removed = current.next;
        current.next = null; this.length--;
        return removed;
    }

    peekAtHead() {
        // Write your hypothesis on the time complexity of this method here - O(1)

        if (this.length === 0) {return}
        return this.head.value;
    }

    print() {
        // Print out the linked list
        // Write your hypothesis on the time complexity of this method here - O(n)
        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }

    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
