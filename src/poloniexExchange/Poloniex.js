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

      })
      .catch((error) => {
        console.log(error)
      })







    }, 1000 )
  }







  render() {


    return (
      <div>

    <div>  {this.state.poloniexspotBTCBase}</div>
    <div>  {this.state.poloniexspotBTCCurrency}</div>
    <div>  {this.state.poloniexspotBTCAmount}</div>

    <div>  {this.state.poloniexspotETHBase}</div>
    <div>  {this.state.poloniexspotETHCurrency}</div>
    <div>  {this.state.poloniexspotETHAmount}</div>

    <div>  {this.state.poloniexspotLTCBase}</div>
    <div>  {this.state.poloniexspotLTCCurrency}</div>
    <div>  {this.state.poloniexspotLTCAmount}</div>



      </div>
    )
  }





}



export default Poloniex
