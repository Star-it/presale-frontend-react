import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class AHTAgreement extends Component {
    state = {
        agreed: false,
        copied: false
    }

    render() {
        const styles = require('./PreSale.scss');
        let render = null;
        
        if (!this.state.agreed) {
            render = (<ul className={styles.agreementList}>
                    <li>{content.agreement1}</li>
                    <li>{content.agreement2}</li>
                    <li>{content.agreement3}</li>
                    <div className="row">
                        <div className="col-xs-11">
                            <a href="#" className={styles.black} onClick={()=>this.setState({agreed: true})}>{content.apply}</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-11">
                            <a href="#" className={styles.black} onClick={()=>this.props.closePopup()}>{content.decline}</a>
                        </div>
                    </div>
                </ul>);
        } else {
            render = (<div className={styles.code}>
                <div className="row center-xs">
                        <div className="col-xs-10">
                            <input type="text" value={this.props.contractAddress} style={{fontSize:'11px'}}/>
                            {(this.state.copied)?<p style={{textAlign: 'center'}}>{content.copied}</p>:<span/>}
                            <CopyToClipboard text={this.props.contractAddress}
                                onCopy={() => this.setState({copied: true})}>
                                 <a href="#" className={styles.black}>{content.copy_to_clipboard}</a>
                            </CopyToClipboard>
                </div></div>
            </div>);
        }
        return (
            <div className={styles.agreement}>
                <header><span className="icon icon-hand-o-up"/>{content.blahblah}</header>
                {render}
            </div>
        );
    }
}
