class MyQueue {
    private firstStack: number[]
    private secondStack: number[]

    constructor() {
        this.firstStack = []
        this.secondStack = []
    }

    push(x: number): void {
        this.firstStack.push(x)
    }

    pop(): number {
        while(this.firstStack.length > 0){
            const currNum = this.firstStack.pop() as number;
            this.secondStack.push(currNum);
        }
        const queueTop = this.secondStack.pop() as number;
        while(this.secondStack.length > 0){
            const currNum = this.secondStack.pop() as number;
            this.firstStack.push(currNum)
        }
        return queueTop;
    }

    peek(): number {
        while(this.firstStack.length > 0){
            const currNum = this.firstStack.pop() as number;
            this.secondStack.push(currNum);
        }
        const queueTop = this.secondStack.pop() as number;
        this.secondStack.push(queueTop);
        while(this.secondStack.length > 0){
            const currNum = this.secondStack.pop() as number;
            this.firstStack.push(currNum)
        }
        return queueTop;
    }

    empty(): boolean {
        return this.firstStack.length === 0 && this.secondStack.length === 0;
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