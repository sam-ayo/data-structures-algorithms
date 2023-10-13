class MyQueue {
    firstStack: number[]
    secondStack: number[]

    constructor() {
        this.firstStack = []
        this.secondStack = []
    }
    private emptySecondStack(){
        if(this.secondStack.length > 0) this.secondStack = [];
    }

    push(x: number): void {
        this.firstStack.push(x)
    }
    pop(): number {
        this.emptySecondStack();
        for(let i = 0; i< this.firstStack.length; i++){
            this.secondStack.push(this.firstStack[i]);
        }
        if(this.secondStack.length === 0) return -1 
        const num = this.secondStack.pop() as number;
        return num;
    }
    peek(): number {
        this.emptySecondStack();
        for(let i = 0; i< this.firstStack.length; i++){
            this.secondStack.push(this.firstStack[i]);
        }
        if(this.secondStack.length === 0) return -1;
        const firstElement = this.secondStack[this.secondStack.length-1];
        return firstElement
    }

    empty(): boolean {
        if(this.firstStack.length === 0) return true;
        return false;
    }
}

class Stack {
    stack: number[]
    constructor(){
        this.stack = []
    }
    pushTop(x: number): void{
        this.stack.push(x)
    }
    peekTop(): number{
        return this.stack[this.stack.length-1]
    }
    popTop(): number{
        if(this.stack.length === 0) return -1
        const element = this.stack.pop() as number;
        return element;
    }
    isEmpty(): boolean {
        if(this.stack.length === 0) return true
        return false
    }
}

var obj = new MyQueue()
const x = 2;
obj.push(x)
var param_2 = obj.pop()
var param_3 = obj.peek()
var param_4 = obj.empty()