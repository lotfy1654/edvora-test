import React from "react"
import Image from "next/image"

class Nearset extends React.Component {

    getData = () => {
        let { allRides, userStationCode } = this.props
        let userNum = Number(userStationCode)
        let data = []
        allRides.map(ele => {
            for (let x = 0; x < ele.station_path.length; x++) {
                if (ele.station_path[x] == userNum) {
                    data.push(ele)
                }
            }
        });
        return (
            <div className="container grid-items">
                {data.length > 0 ? data.map((ele) => (
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
                    </div>)) :
                    <div className="no-found">
                        <h1>No Rides</h1>
                    </div>
                }
            </div>
        )
    }

    render() {
        return (
            <>
                {this.getData()}
            </>
        );
    }
}

export default Nearset;