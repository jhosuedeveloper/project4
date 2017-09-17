import React, { Component } from 'react';
import axios from 'axios'
import './BitcoinCoinbase.css'






class BitcoinCoinbase extends Component {

  constructor(props){
    super(props)

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

      axios.get('https://api.coinbase.com/v2/prices/BTC-USD/spot')
      .then((response) => {
        this.setState({
          coinbasespotBase: response.data['data']['base'],
          coinbasespotCurrency: response.data['data']['currency'],
          coinbasespotAmount: response.data['data']['amount']
        })
        this.props.handlecoinbaseBTH(response.data['data']['amount'])
      })
      .catch((error) => {
        console.log(error)
      })


      axios.get('https://api.coinbase.com/v2/prices/BTC-USD/buy')
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


      axios.get('https://api.coinbase.com/v2/prices/BTC-USD/sell')
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
      </div>
    )
  }





}



export default BitcoinCoinbase
