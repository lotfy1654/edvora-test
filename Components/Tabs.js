import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { RiBarChartHorizontalLine } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import Upcoming from './Upcoming';
import axios from 'axios';
import Nearset from './Nearset';
import Past from './Past';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class SimpleTabs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            allData: [],
            allDataTwo: [],
            display: true,
            selectedState: "",
            selectedCity: ""
        }
        axios.get("https://assessment.api.vweb.app/rides").then((res) => {
            this.setState({
                allData: res.data,
                allDataTwo: res.data,
            })
        })
    }
    state = {
        value: 0,
    };
    handleShow = () => {
        let box = document.getElementsByClassName("select-box")[0];
        let { display } = this.state;
        if (box.classList.contains("show")) {
            box.classList.remove("show")
            this.setState({
                display: !display
            })
        } else {
            box.classList.add("show")
            this.setState({
                display: !display
            })
        }
    }


    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleSelectState = () => {
        var select = document.getElementById("select-state"),
            optionSelected = select.options[select.selectedIndex].value;

        let { allData, allDataTwo } = this.state

        let filterData = allDataTwo.filter(ele => ele.state == optionSelected)
        this.setState({
            allData: filterData
        })
        if (optionSelected == "all") {
            this.setState({
                allData: allDataTwo
            })
        }
    };
    handleSelectCity = () => {
        var select = document.getElementById("select-city"),
            optionSelected = select.options[select.selectedIndex].value;

        let { allData, allDataTwo } = this.state


        let filterData = allDataTwo.filter(ele => ele.city == optionSelected)
        this.setState({
            allData: filterData
        })
        if (optionSelected == "all") {
            this.setState({
                allData: allDataTwo
            })
        }

    };


    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <>
                <div className='tabs-container'>
                    <div className={`${classes.root} tab-box`}>
                        <AppBar position="static" className='tab-bar'>
                            <div className="box-raw">
                                <Tabs value={value} onChange={this.handleChange} className="all-tabs">
                                    <Tab label={"Nearest rides"} className="tab-one" />
                                    <Tab label={`Upcoming rides (${this.state.allData.length})`} className="tab-two" />
                                    <Tab label={`past rides (${this.state.allData.length})`} className="tab-three" />
                                </Tabs>
                                <div className="fliter-box">
                                    <div className="box">
                                        <span onClick={this.handleShow}>
                                            {this.state.display ? <RiBarChartHorizontalLine /> : <AiOutlineClose />}
                                        </span>
                                        <h3>Filter</h3>
                                    </div>
                                    <div className="select-box">
                                        <div className="title">
                                            <h5>fliter</h5>
                                        </div>
                                        <select id="select-state" onChange={this.handleSelectState}>
                                            <option value="all">All State</option>
                                            {
                                                this.state.allDataTwo.map((ele) => (
                                                    <option value={`${ele.state}`}
                                                        key={`${ele.id} ${ele.origin_station_code}`}>{ele.state}</option>
                                                ))
                                            }
                                        </select>
                                        <select name="city" id="select-city" onChange={this.handleSelectCity}>
                                            <option value="all">All City</option>
                                            {
                                                this.state.allDataTwo.map((ele) => (
                                                    <option value={`${ele.city}`}
                                                        key={`${ele.id} ${ele.origin_station_code}`}>{ele.city}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </AppBar>
                        {value === 0 &&
                            <TabContainer className="">
                                <Nearset
                                    allRides={this.state.allData}
                                    userStationCode={this.props.userStationCode} />
                            </TabContainer>}
                        {value === 1 &&
                            <TabContainer>
                                <Upcoming
                                    allRides={this.state.allData}
                                    selectedState={this.state.selectedState}
                                    selectedCity={this.state.selectedCity}
                                />
                            </TabContainer>}
                        {value === 2 && <TabContainer>
                            <Past allRides={this.state.allData} />
                        </TabContainer>}
                    </div>
                </div>
            </>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
