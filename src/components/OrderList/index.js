import React, {Component} from 'react';
import OrderItem from './../OrderItem'
class OrderList extends Component {
    constructor(props) {
        super()
        this.state = {
            data: []
        }
    }
    handleOnSubmit = (id, stars, comment) => {
        const newData = this
            .state
            .data
            .map((item, index) => {
                return item.id === id
                    ? {
                        ...item,
                        stars,
                        comment,
                        ifCommented: true
                    }
                    : item
            })
        this.setState({data: newData})
    }

    componentDidMount() {
        fetch('./mock/orders.json').then(res => {
            if (res.ok) {
                res
                    .json()
                    .then(data => {
                        this.setState({data: data})
                    })
            }
        })
    }
    render() {
        let {data} = this.state
        return (
            <div className="orderList">
                {data.map((item, index) => {
                    return <OrderItem data={item} key={item.id} onSubmit={this.handleOnSubmit}></OrderItem>
                })}

            </div>
        );
    }
}

export default OrderList;