import React, { Component } from 'react';
import DashboardSidebar from './dashboard-sidebar';

let allUsers = [
    {
        name: "Maria Dell",
        designation: "Author",
        team: "Creative"
    },
    {
        name: "Liam Chan",
        designation: "Influencer",
        team: "Marketing"
    },
    {
        name: "Xi Jingping",
        designation: "Associate Lawyer",
        team: "Legal"
    },
    {
        name: "Jason Matt",
        designation: "Tech Lead",
        team: "Software"
    },
    {
        name: "Amanda Pearlson",
        designation: "Legal Associate",
        team: "Legal"
    },
    {
        name: "Sasha Andrews",
        designation: "Marketing Head",
        team: "Marketing"
    },
    {
        name: "Amanda Pearlson",
        designation: "Legal Associate",
        team: "Legal"
    },
    {
        name: "Amanda Pearlson",
        designation: "Legal Associate",
        team: "Legal"
    },
    

];
export default class DashboardBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: allUsers
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-3'>
                        <DashboardSidebar />
                    </div>
                    <div className='col-9'>
                        <div className="user-container">
                            {this.state.user.map((users, index) => {
                                return (
                                    <div class="user-card">
                                        <img
                                            class="user-img"
                                            src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg"
                                        />
                                        <p class="user-name">{users.name}</p>
                                        <p class="user-designation">{users.designation}</p>
                                        <p class="user-team">{users.team}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}