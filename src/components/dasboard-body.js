import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardSidebar from './dashboard-sidebar';
import DashboardHeader from './dashboard-header';
import { getProductInfo } from '../actions/getProductInfo';
import { getSortedProductInfo } from '../actions/getProductInfo';
class DashboardBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filterBrand: [],
            filterAudience: []
        };
    }
    productSortedlist = async () => {
        await this.props.getSortedProductInfo();
        const brandSorting = await this.props.sorted_product_info;
        await console.log('sorting', brandSorting);
    }
    productInfolist = async () => {
        await this.props.getProductInfo();
    }
    brandWiseSorting = async sortingItem => {
        console.log('sortingItem',sortingItem);
        this.state.filterBrand.push(sortingItem);
        return this.props.getProductInfo(this.state.filterBrand);
    }
    targetaudWiseProductInfo = async sortAudience => {
        // const product_list = await this.props.product_info;
        // console.log('hello', product_list);
        // const temp = await product_list && product_list.filter((product) => {
        //     return product.target_audience === "women"
        // });
        console.log('sortingaud',sortAudience);
        this.state.filterAudience.push(sortAudience);
        return this.props.getProductInfo(this.state.filterAudience);
    }
    render() {
        const product_list = (this.props.product_info);
        const sort_list_desc = this.props.sorted_product_info;
        return (
            <div>
                <DashboardHeader
                    targetAudience={(audience) => this.targetaudWiseProductInfo(audience)}
                />
                <div>
                    <button className='sortButton' onClick={() => this.productSortedlist()}>Sort</button>
                </div>
                <div className='row abc'>
                    <div className='col-3'>
                        <DashboardSidebar 
                            brandSorting={(filterSort) => this.brandWiseSorting(filterSort)} />
                    </div>
                    <div className='col-9'>
                        <div className="user-container">
                            {product_list && product_list.map((product, index) => {
                                return (
                                    <div className="user-card" key={index}>
                                        <img
                                            className="user-img"
                                            src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg"
                                        />
                                        <p className="user-name uppercase">{product.title}</p>
                                        <p className="user-designation">Quantity - {product.quantity}</p>
                                        <p className="user-team">Rs.{product.pricing}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            {this.state.data.length > 0 && this.state.data.map((item, index) => {
                                console.log('item', item);
                                return (
                                    <div>
                                        <div key={index}>hey{item.title}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="user-container">
                            {sort_list_desc && sort_list_desc.map((product, index) => {
                                return (
                                    <div className="user-card" key={index}>
                                        <img
                                            className="user-img"
                                            src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg"
                                        />
                                        <p className="user-name">{product.title}</p>
                                        <p className="user-designation">{product.quantity}</p>
                                        <p className="user-team">Rs.{product.pricing}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        product_info: state.product_info.product_info,
        sorted_product_info: state.sorted_product_info.sorted_product_info,
    }
}
export default connect(mapStateToProps, { getProductInfo, getSortedProductInfo })(DashboardBody);