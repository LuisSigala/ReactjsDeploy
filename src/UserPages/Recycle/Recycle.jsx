import React from 'react'
import { Link } from 'react-router-dom'
import UserNavbar from '../../components/UserNavbar';
import "./Recycle.css"

class RecycleUser extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="backgroundRecycle" style={{ height: '100vh' }}>
                <UserNavbar></UserNavbar>
                            <div className="form-group-recycle">
                                <div className="infoRecycle">
                                    <div className="imageItem"><img src="https://www.dropbox.com/sh/2efk6rmts9zqhit/AABHHWavRc1s0Y3lzQWjDhipa/icons8-botella-de-agua-50.png?raw=1" alt="" /></div>
                                    <div className="infoItem"><p>222 miligrams</p></div>
                                </div>
                                <div className="infoRecycle1">
                                    <div className="imageItem"><img src="https://www.dropbox.com/sh/2efk6rmts9zqhit/AADmW7ECznpGKulCILOK4ydMa/icons8-bote-de-cerveza-50.png?raw=1" alt="" /></div>
                                    <div className="infoItem"><p>2.1 Kilograms</p></div>
                                </div>
                            <Link to="/QR">
                            <button className="qr-code">Scan</button>
                            </Link>
                            <Link to="/EmailVerify">
                            <button className="end">End Recycling</button>
                            </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RecycleUser;