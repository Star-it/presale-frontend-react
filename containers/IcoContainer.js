import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import * as IcoActions from "../redux/modules/ico";
import AHTAgreement from '../components/PreSale/AHTAgreement.js';

@connect((state, ownProps) => ({
    ico: state.ico
}))
export default class IcoContainer extends Component {
    componentDidMount() {
        const { getSmartContractInfo } = bindActionCreators(IcoActions, this.props.dispatch);
        getSmartContractInfo();
        this.interval = setInterval(getSmartContractInfo.bind(this), 10000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    openContract(event) {
        if (event) { event.preventDefault(); }
        // Здесь вам надо открывать попап с соглашением
        // контейнера с попапом в комплекте нет, посему коммент
        // openPopup(<AHTAgreement closePopup={closePopup} contractAddress={this.props.ico.contractAddress}/>)
    }

    render() {
        const { children, ico } = this.props;
        const { getBalance } = bindActionCreators(IcoActions, this.props.dispatch);

        let childrenWithProps = React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                ico: ico,
                getBalance: getBalance.bind(this),
                openContract: this.openContract.bind(this)
            });
        });
        return (
            <section id="Ico">
                {childrenWithProps}
            </section>
        );

    }

}
