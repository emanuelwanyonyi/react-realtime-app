import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import "./header.css";

var socket;
class Header extends Component {
    constructor(){
        super();
        this.state = {
            endpoint : 'http://localhost:3000/'
        };
        socket = socketIOClient(this.state.endpoint);
    }

  render() {
    return (
      <div>
        <nav className="NavClass">
            <ul>
                <li>
                    <NavLink exact to="/">
                        Place Order
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/updatepredicted">
                    Change Predicted
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/kitchen">
                    Kitchen
                    </NavLink>
                </li>

            </ul>
        </nav>
      </div>
    )
  }
}

export {Header, socket };