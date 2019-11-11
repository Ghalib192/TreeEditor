import { observable } from 'mobx';
import Node, {Edge, Point} from './Tree';
export default class TreeStore {
    nodes = observable.box([]);
    edges = observable.box([]);
    nodesTemporary = [];
    edgesTemporary = [];
    
    constructor() {
        this.nodesTemporary.push(new Node("Parent", "Or", "", false, true, 0, 500));
        this.nodes.set(this.nodesTemporary);
    }

    AddNode(desc, type, parent, isLeaf, isRoot, offsetTop, offsetLeft) {
        this.nodesTemporary.push(new Node(desc, type, parent, isLeaf, isRoot, offsetTop, offsetLeft));
        this.nodes.set(this.nodesTemporary);
    }

    AddEdge(edge) {
        this.edgesTemporary.push(edge);
        this.edges.set(this.edgesTemporary);
    }
}