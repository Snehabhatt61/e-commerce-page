import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardSidebar from './dashboard-sidebar';
import DashboardHeader from './dashboard-header';
import { getProductInfo } from '../actions/getProductInfo';
class DashboardBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    productInfolist = async () => {
        await this.props.getProductInfo();
    }
    targetaudWiseProductInfo = async (audience) => {
        const product_list = await this.props.getProductInfo(audience);
        console.log('hello', product_list);
        const temp = await product_list && product_list.filter((product) => {
            return product.target_audience === "Women"
        });
        this.setState({
            data: temp
        })
    }
    componentDidMount = async () => {
        await this.productInfolist();
    }
    // onGreet = () => {
    //     alert('From child to parent');
    // }
    render() {
        const product_list = (this.props.product_info);
        return (
            <div>
                <DashboardHeader targetAudience={(audience)=> this.targetaudWiseProductInfo(audience)}/>
                <div className='row abc'>
                    <div className='col-3'>
                        <DashboardSidebar />
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
                                        <p className="user-name">{product.title}</p>
                                        <p className="user-designation">{product.quantity}</p>
                                        <p className="user-team">Rs.{product.pricing}</p>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            {/* <button onClick={() => this.targetaudWiseProductInfo()}>
                                Click Me
                        </button> */}
                            {this.state.data && this.state.data.map((item, index) => {
                                return (
                                    <div>
                                        <div key={index}>{item.title}</div>
                                    </div>
                                )
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
    }
}
export default connect(mapStateToProps, {getProductInfo})(DashboardBody);