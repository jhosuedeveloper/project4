import React, { Component } from 'react';
import axios from 'axios'







class Gdax extends Component {

  constructor(){
    super()

    this.state = {
      gdaxspotBTCBase:"BTC",
      gdaxspotBTCCurrency:"USD",
      gdaxspotBTCAmount:"",

      gdaxspotETHBase:"ETH",
      gdaxspotETHCurrency:"USD",
      gdaxspotETHAmount:"",

      gdaxspotLTCBase:"LTC",
      gdaxspotLTCCurrency:"USD",
      gdaxspotLTCAmount:""


    }
  }




  componentDidMount(){

    setInterval(() => {

      axios.get('https://api.gdax.com/products/BTC-USD/ticker')
      .then((response) => {
        this.setState({
          gdaxspotBTCAmount: response.data['price']
        })
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })



      axios.get('https://api.gdax.com/products/ETH-USD/ticker')
      .then((response) => {
        this.setState({
          gdaxspotETHAmount: response.data['price']
        })
      })
      .catch((error) => {
        console.log(error)
      })



      axios.get('https://api.gdax.com/products/LTC-USD/ticker')
      .then((response) => {
        this.setState({
          gdaxspotLTCAmount: response.data['price']
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

    <div>  {this.state.gdaxspotBTCBase}</div>
    <div>  {this.state.gdaxspotBTCCurrency}</div>
    <div>  {this.state.gdaxspotBTCAmount}</div>

    <div>  {this.state.gdaxspotETHBase}</div>
    <div>  {this.state.gdaxspotETHCurrency}</div>
    <div>  {this.state.gdaxspotETHAmount}</div>

    <div>  {this.state.gdaxspotLTCBase}</div>
    <div>  {this.state.gdaxspotLTCCurrency}</div>
    <div>  {this.state.gdaxspotLTCAmount}</div>



      </div>
    )
  }





}



export default Gdax
