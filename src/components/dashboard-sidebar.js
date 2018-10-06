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
    handleChange = async (e) => {
        this.setState({
            value: await e.target.value.toLowerCase()
        })
        await this.props.brandSorting(this.state.value)
        // console.log('branding', this.state.value);
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
                        onChange={this.handleChange}
                    />
                    Vero Moda
                    <br />
                    <input
                        type="checkbox"
                        value="Adidas"
                        onChange={this.handleChange}
                    />
                    Adidas
                     <br />
                    <input 
                        type="checkbox"
                        value="Pepe"
                        onChange={this.handleChange}
                    />
                    Pepe
                    <br />
                    <input 
                        type="checkbox"
                        value="Biba"
                        onChange={this.handleChange}
                    />
                    Biba
                    <br />
                    <input 
                        type="checkbox"
                        value="First Cry"
                        onChange={this.handleChange}
                    />
                    First Cry
                    <hr />
                    <p>Price</p>
                    <input type="checkbox" /> Less than 1000

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
                    {/* <div className="user-container">
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
                        </div> */}
                    {/* <button onClick={() => this.productSortedlist()}>Click</button> */}

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