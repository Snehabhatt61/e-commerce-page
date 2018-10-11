import React, { Component } from 'react';
import { getProductInfo } from "../actions/getProductInfo";
import PropTypes from 'prop-types';


export default class DashboardHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            searchItem: ''
        }
    }
    searchHandler = async () => {
        console.log('search', this.state.search);
        await this.props.searchAll(this.state.searchItem);
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
                            onChange={event => this.setState({searchItem: event.target.value})}
                        >
                        </input>
                        <button className='header-search-button'
                            onClick={() => this.searchHandler(this.state.searchItem)}
                        >Search
                        </button>
                        <div className='d-flex push'>
                            <p>Sign Up</p>
                            <p>Sign In</p>
                        </div>
                    </div>
                    <form onSubmit={() => this.handleSubmit()}>
                        <select className="dropdown"
                            onChange={(e) => this.props.handleChangeAud(e)}
                            className='header-dropdown'
                            defaultValue= ""
                        >Category
                            <option value="" disabled hidden >Category</option>
                            <option value='all'>All</option>
                            <option value='Men'>Men</option>
                            <option value='Women'>Women</option>
                            <option value='Kids'>Kids</option>
                        </select>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
DashboardHeader.propTypes = {
    greet: PropTypes.func,
    targetAudience: PropTypes.func
};