import React from 'react'
import "./css's/RecycleBar.css"

class RecycleBarItem extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <div className="barInfo">
                        <img className="qrInfo" src={"https://www.dropbox.com/s/rydgeh5iv0mjgkh/icons8-codigo-qr-80.png?raw=1"} alt="" />
                        <h1 className="idInfo">{this.props.transactions.email}</h1>        
                        <h1 className="machineInfo">RC-01</h1>        
                        <h1 className="amountInfo">16:46 - 09/21</h1>
                        <img className="detailsInfo" src={"https://www.dropbox.com/s/lsqzok8b49y3f9h/icons8-mas-384.png?raw=1"} alt="" />
                        <img className="deleteInfo" src={"https://www.dropbox.com/s/qqr98r1day6zh3q/icons8-basura-256.png?raw=1"} alt="" />  
                    </div>
            </React.Fragment>
        )
    }
}

const RecycleBar = (props) => {
    const users = props.users;

    return (
        <React.Fragment>
                <div className="container List mb-5">
                    <div className="list-unstyled">
                        {users.map((transactions) => {
                            return (
                                <div key={transactions._id}>
                                        <RecycleBarItem transactions={transactions}></RecycleBarItem>
                                </div>
                            );
                        })}
                    </div>
                </div>
        </React.Fragment>
    );
};


export default RecycleBar;