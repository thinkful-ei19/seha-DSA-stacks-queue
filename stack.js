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

function peek(stack) {

  let lastNode = stack.top;
  //   stack.top=lastNode.next;
  //   //console.log(lastNode.value);
  //   if (lastNode === null) {
  //     throw new Error('Stack is empty');
  //   }
  return lastNode.data;
}

//console.log(peek(main()));

// function display(stack) {
//   let firstNode = stack.top;
//   while(firstNode.next !== null){
//     firstNode = firstNode.next;
//   }
//   return firstNode;
// }
// console.log(display(main()));

function display(stack) {
  let currNode = stack.top;

  if (currNode === null) {
    throw new Error('Nothing to display');
  }
  let res = peek(stack);

  while (currNode.next) {
    currNode = currNode.next;
    res = currNode.data + ', ' + res;
  }
  return res;
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

function matchingParan(string){
  const openP =new Stack();
  const closeP =new Stack();
  let oP =0;
  let cP=0;
  for(let i=0; i < string.length; i++) {
    if(string[i] === '('){
      openP.push(i);
      oP++;
    }else if(string[i] === ')') {
      closeP.push(i);
      cP++;
    }}
  if(oP === cP){
    return true;
  }else if(oP > cP){
    let removed= openP.pop();
    return `Remove open paran at: ${removed}`;
  }else if(oP < cP){
    let removed=closeP.pop();
    return `Remove close paran at: ${removed}`;
  }
}
console.log(matchingParan('((()))'));
console.log(matchingParan('(((fff))))))'));

function sort(stack){
  let newStack = new Stack();
  while(stack.top){
    let lastStack =stack.pop();
    console.log(lastStack);
    while(newStack.top && peek(newStack) > lastStack){
      stack.push(newStack.pop());
    }
    newStack.push(lastStack);
  }
  return display(newStack);
}
const testSort = new Stack;
testSort.push(16);
testSort.push(5);
testSort.push(35);
testSort.push(24);
console.log(sort(testSort));


