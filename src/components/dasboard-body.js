import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardSidebar from './dashboard-sidebar';
import { getProductInfo } from '../actions/getProductInfo';
// import { userInfo } from 'os';

class DashboardBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            womenInfo: this.props.product_info,
            temp: [],
            data: []
        };
        // console.log('women',womenInfo);
    }
    productInfolist = async () => {
        await this.props.getProductInfo();
    }
    targetaudWiseProductInfo = async () => {
        const product_list = await (this.props.product_info);
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
    render() {
        // console.log('props', this.props.product_info)
        const product_list = (this.props.product_info);
        const temp = ['abc', 'bh'];
        console.log('temp', temp);

        return [
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
                    {temp && temp.map((targetAud, index) => {
                        return (
                            <div key={index}>{targetAud}</div>
                        )
                    })}
                    <div>
                        <button onClick={() => this.targetaudWiseProductInfo()}>
                            Click Me
                        </button>
                        {/* {temp && temp.map(() => {
                            return (
                                <div>
                                    <button onClick={() => this.targetaudWiseProductInfo()}>
                                        Click Me
                                    </button>
                                    <div>{temp.title}</div>
                                </div>
                            )
                        }

                        )} */}
                        {this.state.data.length > 0 && this.state.data.map((item, index) => {
                            console.log('item', item);
                            return (
                                <div key={index}>
                                    <div>{item.title}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        ]
    }
}
function mapStateToProps(state) {
    // console.log('state', state.product_info.product_info);
    return {
        product_info: state.product_info.product_info
    }
}
export default connect(mapStateToProps, {
    getProductInfo
})(DashboardBody);