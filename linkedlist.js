// LinkedList is the dynamic data structure, as we can add or remove elements at ease, and it can even grow as needed. Just like arrays, linked lists store elements sequentially, but don’t store the elements contiguously like an array.

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// As in the above code, we define a class Node having two properties: element and next. Element holds the data of a node while next holds the pointer to the next node, which is initialized to the null value.

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}
