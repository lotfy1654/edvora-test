import React from "react";
import axios from "axios";
import Image from "next/image"
class Header extends React.Component {

    render() {
        return (
            <>
                <div className="nav-bar">
                    <div className="container-fluid">
                        <div className="box">
                            <div className="left">
                                <h2>edvora</h2>
                            </div>
                            <div className="right">
                                <h4>{this.props.userName}</h4>
                                <img src={this.props.userImg} />
                                {/* <img src={`${this.state.userImg}`} placeholder={`${this.state.userImg}`} layout="responsive" width={50} height={50} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;


// export async function getStaticProps() {
//     const req = await fetch("https://assessment.api.vweb.app/user");
//     const data = await req.json();

//     return {
//         props: {
//             dataUser: data,
//         },
//     };
// }

