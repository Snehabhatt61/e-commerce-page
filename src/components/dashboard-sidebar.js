import React, { Component } from 'react';
import { getSortedProductInfo } from '../actions/getProductInfo';
import { connect } from 'react-redux';

class DashboardSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'All'
        };
    }
    render() {
        const sort_list_desc = this.props.sorted_product_info
        return (
            <React.Fragment>
                <div className='sidebar'>
                    <p>Show results for</p>
                    <p>Refine By :</p>
                    <p>Brands</p>
                    <input
                        type="checkbox"
                        value="Vero Moda"
                        onChange={e => this.props.handleChangeBrand(e.target.value.toLowerCase())}
                    />
                    Vero Moda
                    <br />
                    <input
                        type="checkbox"
                        value="Adidas"
                        onChange={e => this.props.handleChangeBrand(e.target.value.toLowerCase())}
                    />
                    Adidas
                     <br />
                    <input
                        type="checkbox"
                        value="Pepe"
                        onChange={e => this.props.handleChangeBrand(e.target.value.toLowerCase())}
                    />
                    Pepe
                    <br />
                    <input
                        type="checkbox"
                        value="Biba"
                        onChange={e => this.props.handleChangeBrand(e.target.value.toLowerCase())}
                    />
                    Biba
                    <br />
                    <input
                        type="checkbox"
                        value="First Cry"
                        onChange={e => this.props.handleChangeBrand(e.target.value.toLowerCase())}
                    />
                    First Cry
                    <hr />
                    {/* <p>Price</p>
                    <input type="checkbox" /> Less than 1000 */}
                </div>
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    console.log('statelog', state);
    return {
        sorted_product_info: state.sorted_product_info.sorted_product_info,
    }
}
export default connect(mapStateToProps, { getSortedProductInfo })(DashboardSidebar);