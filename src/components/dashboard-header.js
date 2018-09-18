import React, { Component } from 'react';

export default class DashboardHeader extends Component {
    render() {
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
                    <select class="dropdown">
                        <option class="dropdown-item" href="#">Men</option>
                        <option class="dropdown-item" href="#">Women</option>
                        <option class="dropdown-item" href="#">Kids</option>
                    </select>
                </div>
                {/* <ul className='d-flex header-sub'>
                        <li className='header-sub-category'>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Shop by Category
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Men</a>
                                    <a class="dropdown-item" href="#">Women</a>
                                    <a class="dropdown-item" href="#">Kids</a>
                                </div>
                            </div>
                        </li>
                        <li>Amazon Pay</li>
                    </ul> */}
            </React.Fragment >
        );
    }
}