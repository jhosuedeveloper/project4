import React, { Component } from 'react';
import axios from 'axios'







class EthereumCoinbase
 extends Component {

  constructor(){
    super()

    this.state = {
      coinbasespotBase:"",
      coinbasespotCurrency:"",
      coinbasespotAmount:"",

      coinbasebuyBase:"",
      coinbasebuyCurrency:"",
      coinbasebuyAmount:"",

      coinbasesellBase:"",
      coinbasesellCurrency:"",
      coinbasesellAmount:""


    }
  }




  componentDidMount(){

    setInterval(() => {

      axios.get('https:/api.coinbase.com/v2/prices/LTC-USD/spot')
      .then((response) => {
        this.setState({
          coinbasespotBase: response.data['data']['base'],
          coinbasespotCurrency: response.data['data']['currency'],
          coinbasespotAmount: response.data['data']['amount']
        })
          this.props.handlecoinbaseLTC(response.data['data']['amount'])
      })
      .catch((error) => {
        console.log(error)
      })


      axios.get('https:/api.coinbase.com/v2/prices/LTC-USD/buy')
      .then((response) => {
        this.setState({
          coinbasebuyBase: response.data['data']['base'],
          coinbasebuyCurrency: response.data['data']['currency'],
          coinbasebuyAmount: response.data['data']['amount']
        })
      })
      .catch((error) => {
        console.log(error)
      })


      axios.get('https:/api.coinbase.com/v2/prices/LTC-USD/sell')
      .then((response) => {
        this.setState({
          coinbasesellBase: response.data['data']['base'],
          coinbasesellCurrency: response.data['data']['currency'],
          coinbasesellAmount: response.data['data']['amount']
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
      SPOT
      <div className="values">BASE:{this.state.coinbasespotBase} </div>
      <div className="values">CURRENCY: {this.state.coinbasespotCurrency} </div>
      <div className="values">AMOUNT: {this.state.coinbasespotAmount} </div>
      BUY:
      <div className="values">BASE:{this.state.coinbasebuyBase} </div>
      <div className="values">CURRENCY: {this.state.coinbasebuyCurrency} </div>
      <div className="values">AMOUNT: {this.state.coinbasebuyAmount} </div>
      SELL:
      <div className="values">BASE:{this.state.coinbasesellBase} </div>
      <div className="values">CURRENCY: {this.state.coinbasesellCurrency} </div>
      <div className="values">AMOUNT: {this.state.coinbasesellAmount} </div>


{100*(this.state.coinbasebuyAmount-this.state.coinbasespotAmount)/this.state.coinbasespotAmount}
<div>{this.state.coinbasebuyAmount-this.state.coinbasespotAmount}</div>
{100*(this.state.coinbasespotAmount-this.state.coinbasesellAmount)/this.state.coinbasespotAmount}
<div>{this.state.coinbasespotAmount-this.state.coinbasesellAmount}</div>



      </div>
    )
  }





}



export default EthereumCoinbase
