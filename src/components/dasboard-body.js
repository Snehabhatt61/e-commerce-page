import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardSidebar from './dashboard-sidebar';
import DashboardHeader from './dashboard-header';
import { getProductInfo, getSortedProductInfo, getProductInfoTarget, getSearchedProductInfo } from '../actions/getProductInfo';
class DashboardBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filterBrand: [],
            filterAudience: '',
            searchedList: [],
            sortby: '',
            sortingOrder: true,
            filteredSortedData: ''

        };
    }
    handleChangeAud = async (e) => {
        await this.setState({
            filterAudience: e.target.value.toLowerCase()
        })
        this.handleFilter();
    }
    handleChangeBrand = async (e) => {
        await this.setState({
            filterBrand: e.target.value.toLowerCase()
        })
        this.handleFilter();
    }
    handleSort = async (sort) => {
        this.setState({
            sortby: sort,
            sortingOrder: this.state.sortBy === sort ? !this.state.sortingOrder : true,
        })
        this.applySortFilter();
    }
    applySortFilter = async () => {
        let sort = await {
            'o': this.state.sortingOrder ? this.state.sortBy : '-' + this.state.sortBy
        }
        await this.props.getProductInfo(this.state.filter, () => {
            this.setState({ data: this.props.product_info })
        });
    }
    handleFilter = async () => {
        let filter = await {
            branding: this.state.filterBrand,
            target_audience: this.state.filterAudience
        }
        await this.props.getProductInfo(filter, () => {
            console.log('hehe', this.props.product_info);
            this.setState({ data: this.props.product_info, filteredSortedData: this.props.product_info })
        });
        console.log('filteredlist', filter);
    }
    sortByKey = async () => {
        var sorted = this.state.filteredSortedData;
        var sorted = sorted.sort(function price(a, b) {
            return b.pricing < a.pricing ? 1
                : b.pricing > a.pricing ? -1
                    : 0;
        });
        this.setState({ data: sorted })
    }
    searchBar = async searchedItem => {
        console.log('searchBar', searchedItem);
        await this.props.getSearchedProductInfo(searchedItem, () => {
            this.setState({ data: this.props.search_result })
        });
    }
    searchButtonClicked = async () => {
        await this.props.getSearchedProductInfo();
    }
    render() {
        return (
            <div>
                <DashboardHeader
                    searchAll={(item) => this.searchBar(item)}
                    handleChangeAud={(e) => this.handleChangeAud(e)}
                    searchButtonClicked={this.searchButtonClicked}
                />
                <div>
                    <button className='sortButton' onClick={() => this.sortByKey()}>Sort</button>
                    {/* <form>
                        <select className="dropdown"
                            onChange={() => this.applySortFilter()}
                            className='sortButton'
                        >Category
                            <option value="" disabled hidden >Sort By</option>
                            <option
                                value=''
                                onClick={() => this.handleSort('highlow')}
                            >High To Low</option>
                            <option
                                value=''
                                onClick={() => this.handleSort('lowHigh')}
                            >Low to High</option>
                        </select>
                    </form> */}
                </div>
                <div className='row abc'>
                    <div className='col-3'>
                        <DashboardSidebar
                            handleChangeBrand={(e) => this.handleChangeBrand(e)}
                        />
                    </div>
                    <div className='col-9'>
                        <div className="user-container">
                            {this.state.data.length > 0 && this.state.data.map((product, index) => {
                                return (
                                    <div className="user-card" key={index}>
                                        <img
                                            className="user-img"
                                            src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg"
                                        />
                                        <p className="user-name text-capitalize">{product.title}</p>
                                        <p className="user-designation text-capitalize">Quantity - {product.quantity}</p>
                                        <p className="user-team text-capitalize">Rs.{product.pricing}</p>
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
        product_info: state.allProduct_detail.allProduct_detail,
        sorted_product_info: state.sorted_product_info.sorted_product_info,
        search_result: state.search_result.search_result
    }
}
export default connect(mapStateToProps, { getProductInfo, getSearchedProductInfo, getProductInfoTarget, getSortedProductInfo })(DashboardBody);