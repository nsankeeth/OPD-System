'use strict';
import React, {Component} from 'react';
import PropTypes 			from "prop-types";

export default class Income extends Component {


    constructor(props) {
        super(props);
        this.total = (this.total + this.props.income.amount);

    }



    render() {
        return <tr>
            <td>{this.props.income.id}</td>
            <td>{this.props.income.date}</td>
            <td>{this.props.income.amount}</td>
            <td>{this.total}</td>
        </tr>
    }

}
