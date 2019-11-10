import React from 'react';
import nodeStyles from './TreeCSS.css';
import $ from 'jquery';
import DraggableElement from './Draggable';

export default class App extends React.Component {
  
  nodeDiv = HTMLDivElement;  
    render() {
      return(
        <div>
          <div className="row">
			<div className="col-lg-1"></div>
			<div className="col-lg-10" style={{textAlign: "center"}}>
			    <div id = "treeContainer">
				    <div ref={x=>this.nodeDiv=x} onPointerEnter={this.dragElement.bind(this)} id={nodeStyles.node}>
					    <h6>Root</h6>
					    <button onClick={this.addNode()} id="addNodeButton" type="button" className="btn btn-default btn-circle"><i className="fa fa-plus-circle"></i></button>
				    </div>
				</div>
			</div>
			<div className="col-lg-1"></div>
		</div>
        </div>
      );
    }

    addNode() {
        console.log("In Add Node");
        var newNode = $('<div onpointerenter="startDrag(this)" id="node"><h6>Root</h6><button onclick="addNode()" id="addNodeButton" type="button" class="btn btn-default btn-circle"><i class="fa fa-plus-circle"></i></button></div>');
		$('#treeContainer').append(newNode);
    }

    dragElement() {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(this.nodeDiv.id + "header")) {
          // if present, the header is where you move the DIV from:
          document.getElementById(this.nodeDiv.id + "header").onmousedown = dragMouseDown();
        } else {
          // otherwise, move the DIV from anywhere inside the DIV:
          this.nodeDiv.onmousedown = dragMouseDown();
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
          this.nodeDiv.style.top = (this.nodeDiv.offsetTop - pos2) + "px";
          this.nodeDiv.style.left = (this.nodeDiv.offsetLeft - pos1) + "px";
        }
      
        function closeDragElement() {
          // stop moving when mouse button is released:
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }
  }

  
