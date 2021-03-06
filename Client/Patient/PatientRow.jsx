"use strict";
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PatientRow extends Component {
  static get propTypes() {
    return {
      patient: PropTypes.object,
      getAllPatient: PropTypes.func
    };
  }

  constructor(props) {
    super(props);
    this.patient = this.props.patient;
    this.getAllPatient = this.props.getAllPatient;
  }

  render() {
    return (
      <tr>
        <td>{this.patient.id}</td>
        <td>{this.patient.fullName}</td>
        <td>{this.patient.contactNumber}</td>
        <td>{this.patient.language}</td>
        <td>{this.patient.age}</td>
        <td>{this.patient.gender}</td>
        <td>{this.patient.gudianContactNumber}</td>
      </tr>
    );
  }
}
