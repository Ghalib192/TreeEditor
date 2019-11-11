export default class Node {

    description = "";
    isLeaf = false;
    isRoot = false;
    parent = "";
    type = "";
    offsetTop = 0;
    offsetLeft = 0;

    constructor(desc, type, parent, isLeaf, isRoot, offsetTop, offsetLeft) {
        this.description = desc;
        this.type = type;
        this.parent = parent;
        this.isLeaf = isLeaf;
        this.isRoot = isRoot;
        this.offsetTop = offsetTop;
        this.offsetLeft = offsetLeft;
    }

}

export class Edge {

    starNode = Node;
    endNode = Node;
    startPoint = Point;
    endPoint = Point;
}

export class Point {
    x = 0.0;
    y = 0.0;
}