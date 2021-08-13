import React from 'react'
import "./RecycleTransactions.css"
import Navbar from '../../components/Navbar';
import api from '../../libs/fetch';
import Loader from "react-js-loader";
import RecycleBar from '../../components/RecycleBar';

class RecycleTransactions extends React.Component{
    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    componentDidMount() {
        this.fetchData();
        this.setFetchInterval();
    }


    fetchData = async () => {
        this.setState({ loading: true, error: null})
        try {
            const data = await api.users.list();
            data.reverse();
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error, data: []})
        }
    }

    setFetchInterval() {
        this.interval = setInterval(this.fetchData, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render(){
        if (this.state.loading == true && !this.state.data) {
            return <div className={"Loader"}>
                    <Loader type="spinner-circle" bgColor={"#05386B"} title={"spinner-circle"} size={250} />
                    </div>;
        }
        return(
            <React.Fragment>
                <div className="transactionsBackground" style={{ height: '100vh' }}>
                <Navbar></Navbar>
                    <div className="bar">
                        <h1 className="qr">QR</h1>        
                        <h1 className="id">ID</h1>        
                        <h1 className="machine">Machine</h1>        
                        <h1 className="amount">Amount</h1>        
                        <h1 className="details">Details</h1>       
                        <RecycleBar users={this.state.data}></RecycleBar> 
                    </div>      
                </div>
            </React.Fragment>
        );
    }
}

export default RecycleTransactions;