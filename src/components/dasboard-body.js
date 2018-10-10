import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardSidebar from './dashboard-sidebar';
import DashboardHeader from './dashboard-header';
import { getProductInfo } from '../actions/getProductInfo';
import { getSortedProductInfo , getProductInfoTarget, getSearchedProductInfo} from '../actions/getProductInfo';
class DashboardBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filterBrand: [],
            filterAudience: '',
            searchedList:[]
        };
    }
    productSortedlist = async () => {
        await this.props.getSortedProductInfo();
        const brandSorting = await this.props.product_info;
        await console.log('sorting', brandSorting);
    }
    productInfolist = async () => {
        await this.props.getProductInfo();
    }
    handleChangeAud = async (e) => {
        this.setState({
            filterAudience: await e.target.value.toLowerCase()
        })
        this.handleFilter();
    }
    handleChangeBrand = async (e)  => {
        this.setState({
            filterBrand: await e.target.value.toLowerCase()
        })
        this.handleFilter();
    }
    handleFilter = async () => {
        await this.props.getProductInfoTarget(this.state.filterAudience,this.state.filterBrand);
    }
    searchBar = async searchedItem => {
        // await this.props.getSearchedProductInfo(searchedItem);
        console.log('searchBar',searchedItem);
        const searching = await this.props.search_result;
        console.log('searchbar',searching);
        await this.props.getSearchedProductInfo(searchedItem);
    }
    searchButtonClicked = async () => {
        await this.props.getSearchedProductInfo();
    }
    render() {
        const product_list = this.props.product_info;
        const search_list = this.props.search_result;
        console.log('search_list',search_list);
        const sort_list_desc = this.props.sorted_product_info;
        return (
            <div>
                <DashboardHeader    
                    // targetAudience={(audience) => this.targetaudWiseProductInfo(audience)}
                    searchAll={(item) => this.searchBar(item)}
                    handleChangeAud = {(e) => this.handleChangeAud(e)}
                    searchButtonClicked = {this.searchButtonClicked()}
                />
                <div>
                    <button className='sortButton' onClick={() => this.productSortedlist()}>Sort</button>
                </div>
                <div className='row abc'>
                    <div className='col-3'>
                        <DashboardSidebar 
                        brandSorting={(brand) => this.brandWiseSorting(brand)}
                        handleChangeBrand = {(e) => this.handleChangeBrand(e)}
                        
                        />
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
                        <div className="user-container">
                            { search_list.length > 0 && search_list.map((searchProduct, index) => {
                                return (
                                    <div className="user-card" key={index}>
                                        <img
                                            className="user-img"
                                            src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg"
                                        />
                                        <p className="user-name">{searchProduct.title}</p>
                                        <p className="user-designation">{searchProduct.quantity}</p>
                                        <p className="user-team">Rs.{searchProduct.pricing}</p>
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
    console.log('searchlis', state.search_result.search_result);
    return {
        product_info: state.product_info.product_info,
        sorted_product_info: state.sorted_product_info.sorted_product_info,
        search_result: state.search_result.search_result
    }
}
export default connect(mapStateToProps, { getSearchedProductInfo, getSortedProductInfo, getProductInfoTarget })(DashboardBody);