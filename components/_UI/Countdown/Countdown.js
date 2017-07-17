import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Countdown extends Component {
    static propTypes = {
        endDate: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props)
        this.state = { remaining: { days: '0', hours: '0', minutes: '0', seconds: '0' } }
    }

    componentDidMount() {
        this.tick()
        this.interval = setInterval(this.tick.bind(this), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    DateBetween(startDate, endDate) {
        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;
        let distance = endDate - startDate;

        if (distance <= 0) {
            return {
                days: '--',
                hours: '--',
                minutes: '--',
                seconds: '--'
            }
        }

        return {
            days: Math.floor(distance / day),
            hours: Math.floor((distance % day) / hour),
            minutes: Math.floor((distance % hour) / minute),
            seconds: Math.floor((distance % minute) / second)
        }
    }

    tick() {
        let startDate = new Date()
        let endDate = new Date(this.props.endDate)
        let remaining = this.DateBetween(startDate, endDate)

        this.setState({
            remaining: remaining
        })
    }

    render() {
        const styles = require('./Countdown.scss');
        const { remaining } = this.state;

        return (
            <div className={styles.countdown}>
                <span className={styles.cube}>
                    <span className={styles.time}>{remaining.days}</span>
                    <span className={styles.days}>{content.days}</span>
                </span>
                <i  className={styles.colon}>:</i>
                <span className={styles.cube}>
                    <span className={styles.time}>{remaining.hours}</span>
                    <span className={styles.hours}>{content.hours}</span>
                </span>
                <i  className={styles.colon}>:</i>
                <span className={styles.cube}>
                    <span className={styles.time}>{remaining.minutes}</span>
                    <span className={styles.minutes}>{content.minutes}</span>
                </span>
                <i  className={styles.colon}>:</i>
                <span className={styles.cube}>
                    <span className={styles.time}>{remaining.seconds}</span>
                    <span className={styles.seconds}>{content.seconds}</span>
                </span>
            </div>
        );
    }
}
