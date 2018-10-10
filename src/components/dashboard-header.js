import React, { Component } from 'react';
import { getProductInfo } from "../actions/getProductInfo";
import PropTypes from 'prop-types';


export default class DashboardHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    searchHandler = async (e) => {
        this.setState({
            search: await e.target.value
        })
        console.log('search', this.state.search);
        await this.props.searchAll(this.state.search);
    }
    render() {
        return (
            <React.Fragment>
                <div className='sub-header'>
                </div>
                <div className='header'>
                    <div className='d-flex'>
                        <div className='header-logo bold'>JustBuy</div>
                        <input
                            placeholder='Search'
                            className='header-search'
                            onChange={this.searchHandler}
                            
                        >
                        </input>
                        <button className='header-search-button'>
                            Search
                        </button>
                        <div className='d-flex push'>
                            <p>Sign Up</p>
                            <p>Sign In</p>
                        </div>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <select className="dropdown"
                            onChange={this.props.handleChangeAud}
                            className='header-dropdown'
                        >Category
                            <option value="" selected disabled hidden >Category</option>
                            <option value='all'>All</option>
                            <option value='Men'>Men</option>
                            <option value='Women'>Women</option>
                            <option value='Kids'>Kids</option>
                        </select>
                    </form>
                    {/* <button onClick={this.props.greet}>Click</button> */}
                </div>
            </React.Fragment>
        )
    }
}
DashboardHeader.propTypes = {
    greet: PropTypes.func,
    targetAudience: PropTypes.func
};