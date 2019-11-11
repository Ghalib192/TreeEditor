import React from 'react';
import './TreeCSS.css';
import $ from 'jquery';
import DraggableElement from './Draggable';
import {observer} from 'mobx-react';

@observer class TreeView extends React.Component {

  parentX = 0.0;
  parentY = 0.0;;
  description = "";
  nodeDiv = HTMLDivElement; 
  nodeContainer = HTMLDivElement;

  constructor(props) {
    super(props);
  }
   
    render() {
      console.log("Nodes in Store", this.props.store.nodes.get().slice());
      return(
        <div>
          <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10" style={{textAlign: "center"}}>
            <div className="row"> 
          {
            this.props.store.nodes.get().slice().map(x =>
              <div ref={x => this.nodeContainer = x} id = "treeContainer" style={{display: "inline-block", position: "relative", width: "60px", zIndex: "9", top: x.offsetTop, left: x.offsetLeft}}>
                <div ref={y=>this.nodeDiv=y} onPointerEnter={this.dragElement.bind(this)} style={{display: "inline-block", position: "absolute", zIndex: "9", backgroundColor: "#fafce6"}} id="node">
                  <h6>{x.description}</h6>
                  <button onClick={this.addNode.bind(this,x)} id="addNodeButton" type="button" className="btn btn-default btn-circle"><i className="fa fa-plus-circle"></i></button>
                </div>
                {!x.isRoot ? this.drawConnection(x) : <></>}
              </div>
            )
          }
          </div>
          </div>
          <div className="col-lg-1"></div>
		</div>
        </div>
      );
    }

    addNode(parentNode) {
        console.log("OffsetTop: ", this.nodeDiv.offsetTop);
        this.parentX = this.nodeContainer.offsetLeft;
        this.parentY = this.nodeContainer.offsetTop;
        this.description = parentNode.description;
        this.props.store.AddNode("Child1", "Or", parentNode.description, true, false, parentNode.offsetTop+100, parentNode.offsetLeft-300);
    
        //     var newNode = $('<div onpointerenter="startDrag(this)" id="node"><h6>Root</h6><button onclick="addNode()" id="addNodeButton" type="button" class="btn btn-default btn-circle"><i class="fa fa-plus-circle"></i></button></div>');
		// $('#treeContainer').append(newNode);
    }

    drawConnection(x) {
      console.log(this.parentX, this.parentY, this.description,this.nodeContainer.offsetLeft, this.nodeContainer.offsetTop)
    }

    dragElement() {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        var elmnt = this.nodeDiv;
        if (document.getElementById(this.nodeDiv.id + "header")) {
          // if present, the header is where you move the DIV from:
          document.getElementById(this.nodeDiv.id + "header").onmousedown = dragMouseDown();
        } else {
          // otherwise, move the DIV from anywhere inside the DIV:
          this.nodeDiv.onmousedown = dragMouseDown;
        }
      
        function dragMouseDown(e) {
            console.log("In mouse down");
          e = e || window.event;
          e.preventDefault();
          // get the mouse cursor position at startup:
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          // call a function whenever the cursor moves:
          document.onmousemove = elementDrag;
        }
      
        function elementDrag(e) {
          e = e || window.event;
          e.preventDefault();
          // calculate the new cursor position:
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          // set the element's new position:
          elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
          elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
      
        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }
  }

  export default TreeView;

  
