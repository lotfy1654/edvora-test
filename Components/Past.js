import axios from "axios";
import React from "react"
import Image from "next/image"
import MapImg from "/Image/image.png"
import { nextConfig } from "/next.config"


class Past extends React.Component {

    render() {
        return (
            <>
                <div>
                    <div className="container grid-items">
                        {this.props.allRides.map((ele) => (
                            <div className="data-item-box" key={`${ele.id} ${ele.origin_station_code}`}>
                                <div className="img-box">
                                    <Image src={ele.map_url} alt=".." width={200} height={200} />
                                </div>
                                <div className="info-box">
                                    <p className="ride-id">
                                        <span className="key">ride id :</span>
                                        <span className="val">{ele.id}</span>
                                    </p>
                                    <p className="origin-station">
                                        <span className="key">origin station :</span>
                                        <span className="val">{ele.origin_station_code}</span>
                                    </p>
                                    <p className="station-path">
                                        <span className="key">station_path :</span>
                                        <span className="val">{ele.station_path}</span>
                                    </p>
                                    <p className="date">
                                        <span className="key">date :</span>
                                        <span className="val">{ele.date}</span>
                                    </p>
                                    <p className="distance">
                                        <span className="key">Distance :</span>
                                        <span className="val">{ele.destination_station_code}</span>
                                    </p>
                                </div>
                                <div className="right-box">
                                    <span className="city">{ele.city}</span>
                                    <span className="state">{ele.state}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default Past;


