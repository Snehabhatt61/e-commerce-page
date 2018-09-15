import React, { Component } from 'react';

export default class DashboardSidebar extends Component {
    render() {
        return (
            // <React.Fragment>
                <div className='sidebar'>
                    <p>
                        Show results for
                    </p>
                    <p>
                        Refine By
                    </p>  
                    <input type="checkbox"/>Brands  
                    
                    <p>Price</p> 
                    <input type="checkbox"/>1000 - 2000
                </div>
            // </React.Fragment>
        );
    }
}
