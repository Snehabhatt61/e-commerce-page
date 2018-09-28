import React, { Component } from 'react';
import { getProductInfo } from "../actions/getProductInfo";
import PropTypes from 'prop-types';


export default class DashboardHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = async (e) => {
        this.setState({
            value: await e.target.value
        })
        await this.props.targetAudience(this.state.value);
    }

    render() {
        return (
            <div className='header'>
                <ul className='d-flex'>
                    <li className='header-logo bold'>E-commerce</li>
                    <li>
                        <input placeholder='Search' className='header-search'></input>
                    </li>
                    <li className='d-flex push'>
                        <p>Sign Up</p>
                        <p>Sign In</p>
                    </li>
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <select className="dropdown"
                        value={this.state.value}
                        onChange={this.handleChange}
                        className='header-dropdown'
                    >
                        <option value='Men'>Men</option>
                        <option value='Women'>Women</option>
                        <option value='Kids'>Kids</option>
                    </select>
                </form>
                {/* <button onClick={this.props.greet}>Click</button> */}
            </div>
        )
    }
}
DashboardHeader.propTypes = {
    greet: PropTypes.func,
    targetAudience: PropTypes.func
};