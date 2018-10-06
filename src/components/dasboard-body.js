import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardSidebar from './dashboard-sidebar';
import DashboardHeader from './dashboard-header';
import { getProductInfo } from '../actions/getProductInfo';
import { getSortedProductInfo , getProductInfoTarget} from '../actions/getProductInfo';
class DashboardBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: 'all',
            filterBrand: '',
            filterAudience: '',
            searchedList: []
        };
    }
    // productSortedlist = async () => {
    //     await this.props.getSortedProductInfo();
    //     const brandSorting = await this.props.product_info;
    //     await console.log('sorting', brandSorting);
    // }
    productInfolist = async () => {
        await this.props.getProductInfo();
    }
    brandWiseSorting = async sortingItem => {
        console.log('sortingItem',sortingItem);
        await this.setState({
            filterBrand : sortingItem
        })
        console.log('brand',this.state.filterBrand);
        await this.props.getProductInfoTarget(this.state.filterBrand);
    }
    targetaudWiseProductInfo = async sortAudience => {
        console.log('sortingaud',sortAudience);
        await this.setState({
            filterAudience : sortAudience
        })
        // console.log(this.state.filterAudience);
        await this.props.getProductInfoTarget(this.state.filterAudience);
    }
    handleChangeAud = async (e) => {
        this.setState({
            value: await e.target.value.toLowerCase()
        })
        console.log('dfg',this.state.value);
        // await this.props.targetAudience(this.state.value);
    }
    searchBar = async searchedItem => {
        console.log('abc',searchedItem);
        this.state.searchedList.push(searchedItem);
        console.log('abc',this.state.searchedList);
        return this.props.getProductInfo(this.state.searchedList);
    }
    render() {
        const product_list = this.props.product_info;
        console.log('list',product_list);
        const sort_list_desc = this.props.sorted_product_info;
        return (
            <div>
                <DashboardHeader
                    // targetAudience={(audience) => this.targetaudWiseProductInfo(audience)}
                    searchAll={() => this.searchBar()}
                    handleChangeAud = {(e) => this.handleChangeAud(e)}
                />
                <div>
                    <button className='sortButton' onClick={() => this.productSortedlist()}>Sort</button>
                </div>
                <div className='row abc'>
                    <div className='col-3'>
                        <DashboardSidebar brandSorting={(brand) => this.brandWiseSorting(brand)} />
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
export default connect(mapStateToProps, { getProductInfo, getSortedProductInfo, getProductInfoTarget })(DashboardBody);