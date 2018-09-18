import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardSidebar from './dashboard-sidebar';
import { getProductInfo } from '../actions/getProductInfo';
import { userInfo } from 'os';
class DashboardBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            womenInfo : this.props.product_info    
        };
        // console.log('women',womenInfo);
    }
    productInfolist = async () => {
        await this.props.getProductInfo();
        console.log('hell', this.props.getProductInfo())
    }
    componentDidMount = async () => {
        await this.productInfolist();
    }
    render() {
        console.log('props', this.props.product_info)
        const product_list = (this.props.product_info);
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-3'>
                        <DashboardSidebar />
                    </div>
                    <div className='col-9'>
                        <div className="user-container">
                            {product_list && product_list.map((product, index) => {
                                return (
                                    <div class="user-card">
                                        <img
                                            class="user-img"
                                            src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg"
                                        />
                                        <p class="user-name">{product.title}</p>
                                        <p class="user-designation">{product.quantity}</p>
                                        <p class="user-team">Rs.{product.pricing}</p>
                                    </div>
                                    
                                );
                            })}
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
function mapStateToProps(state) {
    console.log('state', state.product_info.product_info);
    return {
        product_info: state.product_info.product_info
    }
}
export default connect(mapStateToProps, {
    getProductInfo
})(DashboardBody);