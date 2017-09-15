import React, { Component } from 'react';
import axios from 'axios'







class Poloniex extends Component {

  constructor(){
    super()

    this.state = {
      poloniexspotBTCBase:"BTC",
      poloniexspotBTCCurrency:"USD",
      poloniexspotBTCAmount:"",

      poloniexspotETHBase:"ETH",
      poloniexspotETHCurrency:"USD",
      poloniexspotETHAmount:"",

      poloniexspotLTCBase:"LTC",
      poloniexspotLTCCurrency:"USD",
      poloniexspotLTCAmount:""


    }
  }




  componentDidMount(){

    setInterval(() => {

      axios.get('https://poloniex.com/public?command=returnTicker')
      .then((response) => {

        this.setState({
          poloniexspotBTCAmount: response.data['USDT_BTC']['last'],
          poloniexspotETHAmount: response.data['USDT_ETH']['last'],
          poloniexspotLTCAmount: response.data['USDT_LTC']['last']
        })
        this.props.handlepoloniexBTCETHLTC(response.data['USDT_BTC']['last'], response.data['USDT_ETH']['last'], response.data['USDT_LTC']['last'])
      })
      .catch((error) => {
        console.log(error)
      })







    }, 1000 )
  }







  render() {


    return (
      <div>
      </div>
    )
  }





}



export default Poloniex
