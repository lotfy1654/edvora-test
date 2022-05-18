import React from "react"
import axios from "axios"
import Head from 'next/head'
import Header from '../Components/Header'
import Tabs from '../Components/Tabs'

export default class Home extends React.Component {

  state = {
    userName: "",
    userImg: "",
    userStationCode: "",
  }

  componentDidMount() {
    axios.get("https://assessment.api.vweb.app/user").then((res) => {
      this.setState({
        userName: `${res.data.name}`,
        userImg: `${res.data.url}`,
        userStationCode: `${res.data.station_code}`
      })
    })
  }

  render() {
    return (
      <div>
        <Head>
          <title>Edvora</title>
          <meta name="description" content="Edvora Test" />
        </Head>
        <Header userName={this.state.userName} userImg={this.state.userImg} />
        <Tabs userStationCode={this.state.userStationCode} />
      </div>
    )
  }
}
