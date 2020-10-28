class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  insertAfter(prevNode, data) {}

  print() {
    let temp = this.head;
    let output = "<head> ";
    while (temp) {
      output += temp.data + " ";
      temp = temp.next;
    }
    console.log(output + "<tail>");
  }
}

const list = new LinkedList();
list.push("Saturday");
list.push("Sunday");
list.push("Monday");

list.print();
