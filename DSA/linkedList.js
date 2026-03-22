// Singly Linked List
//Write a JavaScript class to implement a singly linked list.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Singly Linked List class
class LinkedList {
  constructor() {
    this.head = null;
  }
reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;    // store next node
      current.next = prev;    // reverse current pointer
      prev = current;         // move prev ahead
      current = next;         // move current ahead
    }

    this.head = prev; // make last node new head
  }
  // Insert node at end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert at specific index
  insert(value, index) {
    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let count = 0;

    while (current && count < index - 1) {
      current = current.next;
      count++;
    }

    if (!current) {
      console.log("Index out of range");
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  // Delete a node at given index
  delete(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let count = 0;

    while (current && count < index - 1) {
      current = current.next;
      count++;
    }

    if (!current || !current.next) return;

    current.next = current.next.next;
  }

  // Print all nodes
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

// Example usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.insert(15, 1);
list.delete(2);
list.printList();
