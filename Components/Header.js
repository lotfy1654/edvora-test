import React from "react";
import Image from "next/image"
class Header extends React.Component {



    render() {
        const srcImg = this.props.userImg
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
                                {srcImg ? <Image src={srcImg} alt=".." width={50} height={50} /> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;
