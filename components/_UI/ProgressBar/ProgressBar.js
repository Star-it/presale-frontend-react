import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProgressBar extends Component {
    static propTypes = {
        current: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired
    }

    render() {
        const styles = require('./ProgressBar.scss');
        const { current, max } = this.props;
        let percents = 0
        
        if (max!=0) {
            percents = (current / max * 100).toFixed(2);
        }
        
        let width = parseInt(percents, 10).toFixed();

        return (
            <div className={styles.bar}>
                <div className={styles.progress} style={{width: width+'%'}}/>
                <span className={styles.percents}>{percents}%</span>
            </div>
        );
    }
}
