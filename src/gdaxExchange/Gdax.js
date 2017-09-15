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





      function getBTH(){
        return axios.get('https://api.gdax.com/products/BTC-USD/ticker')
      }
      function getETH(){
        return axios.get('https://api.gdax.com/products/ETH-USD/ticker')
      }
      function getLTC(){
        return axios.get('https://api.gdax.com/products/LTC-USD/ticker')
      }

      axios.all([getBTH(), getETH(), getLTC()])
      .then(axios.spread((res1, res2, res3)=> {
        this.setState({
          gdaxspotBTCAmount: res1.data['price'],
          gdaxspotETHAmount: res2.data['price'],
          gdaxspotLTCAmount: res3.data['price']
        })

            this.props.handlegdaxBTCETHLTC(res1.data['price'], res2.data['price'], res3.data['price'])
      }))


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
