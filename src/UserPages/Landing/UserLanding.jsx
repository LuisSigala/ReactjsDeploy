import React from "react"
import { Link } from "react-router-dom";
import UserNavbar from "../../components/UserNavbar";
import "./UserLanding.css"


class UserLanding extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="userLandingBackground" style={{ height: '100vh' }}>
                <UserNavbar></UserNavbar>
                    <div className="userImgContainer"><img src="https://www.dropbox.com/s/4gylvjg08xizpjg/deer.png?raw=1" alt="Material" /></div>
                    <div className="userCardContainer">
                        <div className="userImgContainer1"><img src="https://www.dropbox.com/s/f39pivzkx16zk6m/icons8-maquina-expendedora-50_1.png?raw=1" alt="Material" /></div>
                        <br></br>
                        <div className="userImgsContainer">
                            <img className="userImage1" src="https://www.dropbox.com/s/td9t6fs54ttdsbd/icons8-botella-de-agua-50.png?raw=1" alt="Material" />
                            <img className="userImage2" src="https://www.dropbox.com/s/ewr3ngkalfox4lx/icons8-bote-de-cerveza-50.png?raw=1" alt="Material" />
                        </div>
                        <center>
                        <div className="userMaterialTitle">UTCH BIS</div>
                        <br></br>
                        <div className="userPointsText">
                            Dirección: Km 3.5 Carretera
                            Chihuahua a Aldama 
                            Colinas de León, 31313 Chihuahua, Chih.
                            Teléfono: 614 590 8442
                        </div>
                        <br></br>
                        <div className="userPointsContainer"><p>Find other machines</p></div>
                        <br></br>
                        </center>
                    </div>
                        <div className="userCardInfo">
                        <Link to="/User Materials">
                            <div>
                                <br/>
                                <div className="userTextInfo">Start Recycling</div>
                            </div>
                        </Link>
                        </div>
                        <div className="userCardInfo1">
                        <Link to="/Rewards">
                            <div>
                                <br/>
                                <div className="userTextInfo1">Rewards</div>
                            </div>
                        </Link>
                        </div>
                        <div className="userCardInfo2">
                        <Link to="/Recycle">
                            <div>
                                <br/>
                                <div className="userTextInfo2">Materials Accepted</div>
                            </div>
                        </Link>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default UserLanding;