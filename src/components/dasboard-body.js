import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardSidebar from './dashboard-sidebar';
import DashboardHeader from './dashboard-header';
import { getProductInfo } from '../actions/getProductInfo';
import { getSortedProductInfo, getProductInfoTarget, getSearchedProductInfo } from '../actions/getProductInfo';
class DashboardBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filterBrand: [],
            filterAudience: '',
            searchedList: [],
            sort: []
        };
    }
    productSortedlist = async () => {
        // await this.props.getProductInfo();
        // const brandSorting = await this.props.product_info;
        // await console.log('sorting', brandSorting);
        // await this.props.getProductInfoTarget(this.state.filterAudience, this.state.filterBrand,() => {
        //     this.setState({data: this.props.sorted_product_info})
        // });
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
    handleChangeBrand = async (value) => {
        this.setState({
            filterBrand: value
        })
        this.handleFilter();
        console.log('aud', this.state.filterBrand);
    }
    handleFilter = async () => {
        console.log('props product_info', this.props.product_info)
        await this.props.getProductInfoTarget(this.state.filterAudience, this.state.filterBrand, () => this.setState({ data: this.props.product_info }));
        console.log('filter', this.state.data);
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
    componentDidUpdate = (previousProps, nextState) => {
        console.log('prevprops', previousProps, nextState);
        if (previousProps.product_info.filterBrand !== this.props.product_info.filterBrand) {
            this.setState({ data: this.props.product_info });
        }
        else {
            return false;
        }
    }
    render() {
        const sort_list_desc = this.props.sorted_product_info;
        // console.log('data', this.state.data)
        return (
            <div>
                <DashboardHeader
                    searchAll={(item) => this.searchBar(item)}
                    handleChangeAud={(e) => this.handleChangeAud(e)}
                    searchButtonClicked={this.searchButtonClicked()}
                />
                <div>
                    <button className='sortButton' onClick={() => this.productSortedlist()}>Sort</button>
                    {/* <form onSubmit={this.handleSubmit}>
                        <select className="dropdown"
                            onChange={this.productSortedlist}
                            className='sortButton'
                        >Category
                            <option value="" selected disabled hidden >Sort By</option>
                            <option value=''>High To Low</option>
                            <option value=''>Low to High</option>
                        </select>
                    </form> */}

                </div>
                <div className='row abc'>
                    <div className='col-3'>
                        <DashboardSidebar
                            // brandSorting={(brand) => this.brandWiseSorting(brand)}
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
        product_info: state.product_info.product_info,
        sorted_product_info: state.sorted_product_info.sorted_product_info,
        search_result: state.search_result.search_result
    }
}
export default connect(mapStateToProps, { getSearchedProductInfo, getSortedProductInfo, getProductInfoTarget })(DashboardBody);