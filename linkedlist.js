// LinkedList is the dynamic data structure, as we can add or remove elements at ease, and it can even grow as needed. Just like arrays, linked lists store elements sequentially, but don’t store the elements contiguously like an array.

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// As in the above code, we define a class Node having two properties: element and next. Element holds the data of a node while next holds the pointer to the next node, which is initialized to the null value.

class LinkedList {
  // Linked List class has two properties: i.e. head and size, where the head stores the first node of a List, and size indicates the number of nodes in a list.
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adds element at the end of the list
  add(element) {
    // create new node
    const node = new Node(element);

    // store current node
    let current;

    // if list is empty, add element and assign it as the head
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      // iterate to end of list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }
    this.size += 1;
  }
}
