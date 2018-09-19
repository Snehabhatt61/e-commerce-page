import React, { Component } from 'react';
import { getProductInfo } from "../actions/getProductInfo";

export default class DashboardHeader extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOption : '',
            target_options : []
        }
    }
    // handleChange(selectedOption) {
    //     this.setState({selectedOption});
    // }
    // componentDidMount() {
    //     getProductInfo()

    // }
    render() {
        // let options = 
        return (
            <React.Fragment>
                <div className='header'>
                    <ul className='d-flex'>
                        <li className='header-logo'>BDS</li>
                        <li>
                            <input placeholder='Search' className='header-search'></input>
                        </li>
                        <li className='d-flex push'>
                            <p>Sign Up</p>
                            <p>Sign In</p>
                        </li>
                    </ul>
                    <select className="dropdown"
                        // options={options}
                        onChange={this.handleChange}
                    />
                    <option></option>
                </div>
            </React.Fragment >
        );
    }
}