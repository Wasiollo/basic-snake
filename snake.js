

class Snake{
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.tail = x + size;
    }
}

var snake = new Snake();