'use strict';

//Creates a node containing the data and a reference to the next item
class _Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.prev = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }


  enqueue(data){
    
    const node = new _Node(data);
    //create a node with the data that you want to add to the queue
  
    if (this.first === null) {
      this.first = node;
      //if the queue is empty, make the node the first node on the queue
    }
  
    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
      //if there is something on the queue already then take the node that 
      //is currently at the end of the queue and link it to the new node
    }
    this.last = node;
    //make the new node the last item on the queue

  }
  //runtime of inserting in a queue is constant O(1).
  dequeue() {
    if (this.first === null) {
      return;
      //if the queue is empty, there is nothing to return
    }
    const node = this.first;
    this.first = node.prev;
    //make the first item on the queue to be the the item that is next
    //on the line the item after the current first item

    if (node === this.last) {
      this.last = null;
      //if this is the last item in the queue
    }

    return node.value;
  }
  //runtime of removing an item from a queue is constant O(1)
}

function main() {
  const starTrekQ = new Queue;
  starTrekQ.enqueue('Kirk');
  starTrekQ.enqueue('Spock'); 
  starTrekQ.enqueue('Uhura');
  starTrekQ.enqueue('Sulu');
  starTrekQ.enqueue('Checkov');

  starTrekQ.dequeue();
  starTrekQ.dequeue();
  // console.log(starTrekQ);
  // return starTrekQ;
  console.log(display(starTrekQ));
  
}
main();

function peek(queue){
  let firstQueue= queue.first;
  return firstQueue.value;
}
//console.log(peek(main()));

function display(queue){
  let firstQueue = queue.first;
  if(firstQueue === null) {
    throw new Error('Nothing to display');
  }
  let res = firstQueue .value;
  while (firstQueue !== queue.last) {
    firstQueue = firstQueue.prev;
    res = firstQueue .value + ', ' + res;
  }
  return res;
}
 

