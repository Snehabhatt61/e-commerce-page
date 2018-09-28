import React, { Component } from 'react';
import getSortedProductInfo from '../actions/getProductInfo';
import { connect } from 'react-redux';

class DashboardSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    productSortedlist = async () => {
        const brandSorting = await this.props.sorted_product_info;
        await console.log('sorting',this.props.sorted_product_info);
    }
    handleChange = async (e) => {
        await this.productSortedlist();
        // this.setState({
        //     value: e.target.value
        // })
    }
    // componentDidMount = async () => {
    //     console.log('sorted',sorted_product_info);
    // }
    render() {
        return (
            <React.Fragment>
                <div className='sidebar'>
                    <p>Show results for</p>
                    <p>Refine By</p>
                    <input type="checkbox" />Brands
                    <hr />
                    <p>Price</p>
                    <input type="checkbox" />1000 - 2000

                     {/* <form onSubmit={this.handleSubmit}>
                        <select className="dropdown"
                            value={this.state.value}
                            onChange={this.handleChange}
                            className='header-sortby'
                        >
                            <option value=''>Relevance</option>
                            <option value='Women'>Low to high</option>
                            <option value='Kids'>High to low</option>
                        </select>
                    </form> */}
                    <button onClick={() => this.productSortedlist()}>Click</button>
                </div>
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    console.log('statelog',state);
    return {
        sorted_product_info: state.sorted_product_info.sorted_product_info,
    }   
}
export default connect(mapStateToProps, {
    getSortedProductInfo
})(DashboardSidebar);