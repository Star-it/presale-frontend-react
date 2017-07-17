import React, { Component } from 'react';
import NumberEasing from 'react-number-easing';

import Countdown from "../_UI/Countdown/Countdown.js";
import ProgressBar from "../_UI/ProgressBar/ProgressBar.js";
import Cube from "../_UI/Cube/Cube.js";

export default class PreSale extends Component {
    state = {
        address: '',
        copied: false
    }

    setQuery(e) {
        var value = e.target.value;
        this.setState({ address: value });
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.getBalance(this.state.address);
        }
    }

    render() {
        const styles = require('./PreSale.scss');
        const { content } = this.context.translate;
        let { tokensSold, weiRaised, hardCap, investorCount, startTime, endTime, totalTokens, contractAddress, crowdsaleFinished } = this.props.ico;
        const distribution = (totalTokens - tokensSold)

        let spinSpeed = (weiRaised > 0)?(2 / (weiRaised / hardCap)).toFixed():30;
        let countDown = [];
        if (crowdsaleFinished) {
            countDown = [<h2>{content.presale_ended}</h2>]
        } else if (startTime * 1000 - Date.now() > 0) {
            countDown = [<h2>{content.presale_start}:</h2>, <Countdown endDate={startTime*1000}/>];
        } else {
            countDown = [<h2>{content.presale_end}:</h2>, <Countdown endDate={endTime*1000}/>];
        }

        let fixed = Math.floor(weiRaised)
        let float = (weiRaised % 1).toFixed(2).slice(2)

        return (
            <div id="PreSale" className={styles.presale}>
                {/*<div className={styles.fill} />*/}
                <div className={`${styles.place} wrapper row center-xs`}>
                    <div className="col-sm-8">
                        <h1>Ahoolee</h1>
                        <h2>{content.main_intro_cut}</h2>
                        <p><a href="http://ahoolee.io" target="_blank">Ahoolee ICO pre-seed</a> {content.seed_intro}</p>
                        {countDown}
                        <Cube style={{animationDuration:spinSpeed+"s"}}/>
                        <div className="row center-xs">
                            <div className="col-xs-12 col-sm-4" onClick={(e)=>this.props.openContract(e)}>
                                <div className="button" style={{marginBottom: '20px'}}>
                                    {content.getContractAddress}
                                </div>
                            </div>
                        </div>
                        <div className="row between-xs">
                            <div className="col-xs-12 col-sm-4">
                                <p className={styles.largeString}>
                                    <NumberEasing
                                      value={distribution}
                                      speed={3000} />
                                </p>
                                <p className={styles.smallString}>{content.tokens_left}</p>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <p className={styles.largeString}>
                                    <NumberEasing
                                      value={investorCount}
                                      speed={3000} />
                                </p>
                                <p className={styles.smallString}>{content.investorCount}</p>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <p className={styles.largeString}>
                                    <NumberEasing
                                      value={fixed}
                                      speed={3000} />.{float}
                                </p>
                                <p className={styles.smallString}>{content.eth_raised}</p>
                            </div>
                        </div>
                        <ProgressBar current={weiRaised} max={hardCap} />
                        <div className="row center-xs">
                            <div className="col-xs-12 col-sm-6">
                                <a href={content.distribution_link} target="_blank" className={styles.white}>{content.distribution}</a>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <a href={content.whitepaper_link}  target="_blank" className={styles.white}>Whitepaper</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
