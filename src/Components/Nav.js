import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

let headerStyle = {
  fontFamily: 'Arvo',
  fontWeight: '700',
  fontSize: '2em',
  textAlign: 'center'
}

const onMouseOver = event => {
  const el = event.target;
  let colorhex = [
    "#7AF377",
    "#3498DB",
    "#F1C530",
    "#F29C29",
    "#8E44AD",
    "#4AA086",
    "#E74C3C",
    "#65CC71",
    "#D3541B",
    "#EB4367",
    "#74F7D9",
    "#DDA8FC"
  ];
  el.style.color = colorhex[Math.floor(Math.random() * 12)];
};

const onMouseOut = event => {
  const el = event.target;
  let black = "#fff";
  el.style.color = black;
};

class Nav extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header
          onMouseEnter={event => onMouseOver(event)}
          onMouseOut={event => onMouseOut(event)}
        >
          <Navbar.Brand className="animated rubberBand slow delay-3s">
            <a style={headerStyle} rel="noopener noreferrer">Awesome Note Taking App</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Nav