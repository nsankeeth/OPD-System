"use strict";

import React, { Component } from "react";
import axios from "axios";
import CalculateLoyality from "../Loyality/CalculateLoyality";

export default class PatientView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: []
    };
  }

  totalLoyality(id) {
    axios.get("http://localhost:8081/loyality/" + id).then(res => {
      this.setState({
        patients: res.data
      });
    });
  }

  render() {
    return (
      <div class="mydesign2">
        <h2>Loyality</h2>
        <hr />
        <CalculateLoyality totalLoyality={id => this.totalLoyality(id)} />
        <h3>Total Loyality Points - {this.state.patients}</h3>
      </div>
    );
  }
}
