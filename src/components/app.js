import React, { Component } from 'react';
import DashboardHeader from './dashboard-header';
import DashboardBody from './dasboard-body';

export default class App extends Component {
  render() {
    return (
      <div>
        <DashboardHeader/>
        <DashboardBody/>
      </div>
    );
  }
}
