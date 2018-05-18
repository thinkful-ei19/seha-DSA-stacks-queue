'use strict';

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
//Creates a node containing the data 
//and a reference to the next item

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
       
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
      //if the top of the stack is empty, then 
      //the data will be the top of the stack
    }

    const node = new _Node(data, this.top);
    this.top = node;
    //if the top already has something then 
    //create a new node add data to the new node
    //have the pointer point to the top 
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
    //in order to remove the top of the stack, you have to point
    //the pointer to the next item and that next item becomes the
    //top of the stack
  }

}
function main() {
  const starTrek = new Stack;
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');

  starTrek.pop();
  starTrek.pop();

  console.log(JSON.stringify(starTrek));
  return starTrek;
}
main();

function peek(stack) {
  let lastNode = stack.top;
  stack.top=lastNode.next;
  //console.log(lastNode.value);
  if (lastNode === null) {
    throw new Error('Stack is empty');
  }
  return lastNode;
}
console.log(peek(main()));

function display(stack) {
  let firstNode = stack.top;
  while(firstNode.next !== null){
    firstNode = firstNode.next;
  }
  return firstNode;
}
console.log(display(main()));

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let newS = new Stack();
  for(let i=0; i< s.length; i++){
    newS.push(s[i]);
  }
  for(let i=0; i <s.length/2; i++){
    if (s[i] !== newS.pop()){
      return false;
    }else{
      return true;
    }
  }
}

console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));

