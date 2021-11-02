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
  /*
  In the order to add an element at the end of the list we consider the following : 
    1. If the list is empty then add an element and it will be head
    2. If the list is not empty then iterate to the end of the list and add an element at the end of the list
  */
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

  // inserts an element at the given index in a list.

  // insert element at the position index
  // of the list
  insertAt(element, index) {
    if (index < 0 || index > this.size) return console.log('Please enter a valid index.');
    else {
      let node = new Node(element);
      let curr;
      let prev;

      curr = this.head;

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let i = 0;

        while (i < index) {
          i++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }
  /*
    In order to add an element at the given index of the list we consider three conditions as follows: 
  
    if the index is zero we add an element at the front of the list and make it head
    If the index is the last position of the list we append the element at the end of the list
    if the index is between 0 or size – 1 we iterate over to the index and add an element at that index
  */

  // removeFrom(index) – It removes and returns an element from the list from the specified index

  // removes an element from the
  // specified location
  removeFrom(index) {
    if (index < 0 || index >= this.size) return console.log('Please Enter a valid index');
    else {
      let curr;
      let prev;
      let i = 0;
      curr = this.head;
      prev = curr;

      // deleting first element
      if (index === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the
        // position to removce an element
        while (i < index) {
          i++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element
        prev.next = curr.next;
      }
      this.size--;

      // return the remove element
      return curr.element;
    }
  }

  /*
    In order to remove an element from the list we consider three conditions:

    If the index is 0 then we remove the head and make the next node head of the list
    if the index is size – 1 then we remove the last element from the list and make prev the last element
    if it’s in between 0 to size – 1 we remove the element by using prev and the current node
  */

  // removeElement(element) – This method removes element from the list. It returns the removed element, or if it’s not found it returns -1

  removeElement(element) {
    let current = this.head;
    let prev = null;

    // iterate over the list
    while (current != null) {
      // comparing element with current
      // element if found then remove the
      // and return true
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  // indexOf(element) – it returns the index of a given element if the element is in the list.
  // finds the index of element
  indexOf(element) {
    let count = 0;
    let current = this.head;

    // iterae over the list
    while (current != null) {
      // compare each element of the list
      // with given element
      if (current.element === element) return count;
      count++;
      current = current.next;
    }

    // not found
    return -1;
  }
  // In this method, we iterate over the list to find the index of an element. If it is not present in the list it returns -1 instead.

  // isEmpty() – it returns true if the list is empty.
  // checks the list for empty
  isEmpty() {
    return this.size == 0;
  }

  // size_of_list() – It returns the size of list
  // gives the size of the list
  size_of_list() {
    console.log(this.size);
  }

  // printList() – It prints the contents of the list.

  // prints the list items
  printList() {
    let curr = this.head;
    let str = '';
    while (curr) {
      str += curr.element + ' ';
      curr = curr.next;
    }
    console.log(str);
  }
}

// create an object for the linked list class
const ll = new LinkedList();

// test isEmpty() on an empty list and return true;
console.log(ll.isEmpty());

// add element to the list
ll.add(10);

// print 10
ll.printList();

// returns 1
ll.size_of_list();

// add more elements
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// return 10 through 50;
ll.printList();

// prints 50 from the list
console.log('is element removed ? ' + ll.removeElement(50));

// print 10 through 40 since 50 is removed
ll.printList();

// returns 3
console.log('Index of 40 ' + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

ll.printList();

// returns false
console.log('is List Empty ? ' + ll.isEmpty());

// remove 3rd element from the list
console.log(ll.removeFrom(3));

// prints 10 20 60 40
ll.printList();
