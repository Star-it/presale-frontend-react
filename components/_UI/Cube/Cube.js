import React, { Component } from 'react';

export default class Cube extends Component {

    render() {

        require('./qube.css');
        const styles = require('./Cube.scss');

        return (
            <div className={`${styles.wrap} example qube-perspective spin`} >
            <ul className={`${styles.cube09} qube no-shading`} style={(this.props.style || {})}>
              <li className="top"></li>
              <li className="bottom"></li>
              <li className="front"></li>
              <li className="left"></li>
              <li className="back"></li>
              <li className="right"></li>
            </ul>
            </div>
        );
    }
}
