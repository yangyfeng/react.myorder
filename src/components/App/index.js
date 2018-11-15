import React, {Component} from 'react';
import OrderList from './../OrderList'
import Header from './../Header'
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <OrderList></OrderList>
            </div>
        );
    }
}

export default App;
