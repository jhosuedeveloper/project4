import React, { Component } from 'react';
import './App.css';
import BitcoinCoinbase from './coinbaseExchange/BitcoinCoinbase.js'
import Poloniex from './poloniexExchange/Poloniex.js'
import Gdax from './gdaxExchange/Gdax.js'
import EthereumCoinbase from './coinbaseExchange/EthereumCoinbase.js'
import LitecoinCoinbase from './coinbaseExchange/LitecoinCoinbase.js'
import NumericLabel from 'react-pretty-numbers'
import NumberFormat from 'react-number-format'

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      coinbaseBTC:'',
      coinbaseETH:'',
      coinbaseLTC:'',
      poloniexBTC:'',
      poloniexETH:'',
      poloniexLTC:'',
      gdaxBTC:'',
      gdaxETH:'',
      gdaxLTC:'',
      arbitrage: false,
      arbt1: false,
      arbt2: false,
      arbt3: false,
      arbt4: false,
      arbt5: false,
      arbt6: false,
      arbt7: false,
      arbt8: false,
      arbt9: false,
      triggerPercent: 5, //percent
      btcmsg1: '',
      btcmsg2: '',
      btcmsg3: '',
      ethmsg1: '',
      ethmsg2: '',
      ethmsg3: '',
      ltcmsg1: '',
      ltcmsg2: '',
      ltcmsg3: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handlecoinbaseBTH (bitcoin) {
    this.setState({
      coinbaseBTC: bitcoin
    })
  }
  handlecoinbaseETH (ethereum) {
    this.setState({
      coinbaseETH: ethereum
    })
  }
  handlecoinbaseLTC (litecoin) {
    this.setState({
      coinbaseLTC: litecoin
    })
  }

  handlepoloniexBTCETHLTC(bitcoin, ethereum, litecoin) {
    this.setState({
      poloniexBTC:bitcoin,
      poloniexETH:ethereum,
      poloniexLTC:litecoin
    })
  }

  handlegdaxBTCETHLTC(bitcoin, ethereum, litecoin) {
    this.setState({
      gdaxBTC:bitcoin,
      gdaxETH:ethereum,
      gdaxLTC:litecoin
    })
  }

  componentDidMount(){

    setInterval(() => {
      if(this.state.coinbaseBTC && this.state.poloniexBTC && this.state.gdaxBTC && this.state.coinbaseETH && this.state.poloniexETH && this.state.gdaxETH && this.state.coinbaseLTC && this.state.poloniexLTC && this.state.gdaxLTC){


        if((this.state.coinbaseBTC - this.state.poloniexBTC) <0 ){
          if (   100*(this.state.poloniexBTC - this.state.coinbaseBTC)/this.state.coinbaseBTC > this.state.triggerPercent  ){
            this.setState({arbt1: true})
            this.setState({btcmsg1: "buy BTC in coinbase and sell it on poloniex"})
          }
          else{
            this.setState({arbt1: false})
            this.setState({btcmsg1: "No arbitrage FOR BITCOIN going on now"})
          }
        }
        else if ((this.state.coinbaseBTC - this.state.poloniexBTC) > 0 ) {
          if (   100*(this.state.coinbaseBTC - this.state.poloniexBTC)/this.state.poloniexBTC > this.state.triggerPercent  ){
            this.setState({arbt1: true})
            this.setState({btcmsg1: "buy BTC in poloniex and sell it on coinbase"})
          }
          else{
            this.setState({arbt1: false})
            this.setState({btcmsg1: "No arbitrage FOR BITCOIN going on now"})
          }
        }
        else{
          this.setState({arbt1: false})
          this.setState({btcmsg1: "No arbitrage FOR BITCOIN going on now"})
        }//second stage
        if((this.state.coinbaseBTC - this.state.gdaxBTC) <0 ){
          if (   100*(this.state.gdaxBTC - this.state.coinbaseBTC)/this.state.coinbaseBTC > this.state.triggerPercent  ){
            this.setState({arbt2: true})
            this.setState({btcmsg2: "buy BTC in coinbase and sell it on gdax"})
          }
          else{
            this.setState({arbt2: false})
            this.setState({btcmsg2: "No arbitrage FOR BITCOIN going on now"})
          }
        }
        else if ((this.state.coinbaseBTC - this.state.gdaxBTC) > 0 ) {
          if (   100*(this.state.coinbaseBTC - this.state.gdaxBTC)/this.state.gdaxBTC > this.state.triggerPercent  ){
            this.setState({arbt2: true})
            this.setState({btcmsg2: "buy BTC in gdax and sell it on coinbase"})
          }
          else{
            this.setState({arbt2: false})
            this.setState({btcmsg2: "No arbitrage FOR BITCOIN going on now"})
          }
        }
        else{
          this.setState({arbt2: false})
          this.setState({btcmsg2: "No arbitrage FOR BITCOIN going on now"})
        }//third stage
        if((this.state.poloniexBTC - this.state.gdaxBTC) <0 ){
          if (   100*(this.state.gdaxBTC - this.state.poloniexBTC)/this.state.poloniexBTC > this.state.triggerPercent  ){
            this.setState({arbt3: true})
            this.setState({btcmsg3: "buy BTC in poloniex and sell it on gdax"})
          }
          else{
            this.setState({arbt3: false})
            this.setState({btcmsg3: "No arbitrage FOR BITCOIN going on now"})
          }
        }
        else if ((this.state.poloniexBTC - this.state.gdaxBTC) > 0 ) {
          if (   100*(this.state.poloniexBTC - this.state.gdaxBTC)/this.state.gdaxBTC > this.state.triggerPercent  ){
            this.setState({arbt3: true})
            this.setState({btcmsg3: "buy BTC in gdax and sell it on poloniex"})
          }
          else{
            this.setState({arbt3: false})
            this.setState({btcmsg3: "No arbitrage FOR BITCOIN going on now"})
          }
        }
        else{
          this.setState({arbt3: false})
          this.setState({btcmsg3: "No arbitrage FOR BITCOIN going on now"})
        }
        //end of BITCOIN PHASE






        if((this.state.coinbaseETH - this.state.poloniexETH) <0 ){
          if (   100*(this.state.poloniexETH - this.state.coinbaseETH)/this.state.coinbaseETH > this.state.triggerPercent  ){
            this.setState({arbt4: true})
            this.setState({ethmsg1: "buy ETH in coinbase and sell it on poloniex"})
          }
          else{
            this.setState({arbt4: false})
            this.setState({ethmsg1: "No arbitrage FOR Ethereum going on now"})
          }
        }
        else if ((this.state.coinbaseETH - this.state.poloniexETH) > 0 ) {
          if (   100*(this.state.coinbaseETH - this.state.poloniexETH)/this.state.poloniexETH > this.state.triggerPercent  ){
            this.setState({arbt4: true})
            this.setState({ethmsg1: "buy ETH in poloniex and sell it on coinbase"})
          }
          else{
            this.setState({arbt4: false})
            this.setState({ethmsg1: "No arbitrage FOR Ethereum going on now"})
          }
        }
        else{
          this.setState({arbt4: false})
          this.setState({ethmsg1: "No arbitrage FOR Ethereum going on now"})
        }//second stage
        if((this.state.coinbaseETH - this.state.gdaxETH) <0 ){
          if (   100*(this.state.gdaxETH - this.state.coinbaseETH)/this.state.coinbaseETH > this.state.triggerPercent  ){
            this.setState({arbt5: true})
            this.setState({ethmsg2: "buy ETH in coinbase and sell it on gdax"})
          }
          else{
            this.setState({arbt5: false})
            this.setState({ethmsg2: "No arbitrage FOR Ethereum going on now"})
          }
        }
        else if ((this.state.coinbaseETH - this.state.gdaxETH) > 0 ) {
          if (   100*(this.state.coinbaseETH - this.state.gdaxETH)/this.state.gdaxETH > this.state.triggerPercent  ){
            this.setState({arbt5: true})
            this.setState({ethmsg2: "buy ETH in gdax and sell it on coinbase"})
          }
          else{
            this.setState({arbt5: false})
            this.setState({ethmsg2: "No arbitrage FOR Ethereum going on now"})
          }
        }
        else{
          this.setState({arbt5: false})
          this.setState({ethmsg2: "No arbitrage FOR Ethereum going on now"})
        }//third stage
        if((this.state.poloniexETH - this.state.gdaxETH) <0 ){
          if (   100*(this.state.gdaxETH - this.state.poloniexETH)/this.state.poloniexETH > this.state.triggerPercent  ){
            this.setState({arbt6: true})
            this.setState({ethmsg3: "buy ETH in poloniex and sell it on gdax"})
          }
          else{
            this.setState({arbt6: false})
            this.setState({ethmsg3: "No arbitrage for ETHEREUM going on now"})
          }
        }
        else if ((this.state.poloniexETH - this.state.gdaxETH) > 0 ) {
          if (   100*(this.state.poloniexETH - this.state.gdaxETH)/this.state.gdaxETH > this.state.triggerPercent  ){
            this.setState({arbt6: true})
            this.setState({ethmsg3: "buy ETH in gdax and sell it on poloniex"})
          }
          else{
            this.setState({arbt6: false})
            this.setState({ethmsg3: "No arbitragefor ETHEREUM going on now"})
          }
        }
        else{
          this.setState({arbt6: false})
          this.setState({ethmsg3: "No arbitrage for ETHEREUM going on now"})
        }//end of ETHEREUM PHASE





        if((this.state.coinbaseLTC - this.state.poloniexLTC) <0 ){
          if (   100*(this.state.poloniexLTC - this.state.coinbaseLTC)/this.state.coinbaseLTC > this.state.triggerPercent  ){
            this.setState({arbt7: true})
            this.setState({ltcmsg1: "buy LTC in coinbase and sell it on poloniex"})
          }
          else{
            this.setState({arbt7: false})
            this.setState({ltcmsg1: "No arbitrage FOR LITECOIN going on now"})
          }
        }
        else if ((this.state.coinbaseLTC - this.state.poloniexLTC) > 0 ) {
          if (   100*(this.state.coinbaseLTC - this.state.poloniexLTC)/this.state.poloniexLTC > this.state.triggerPercent  ){
            this.setState({arbt7: true})
            this.setState({ltcmsg1: "buy LTC in poloniex and sell it on coinbase"})
          }
          else{
            this.setState({arbt7: false})
            this.setState({ltcmsg1: "No arbitrage FOR LITECOIN going on now"})
          }
        }//second stage
        else{
          this.setState({arbt7: false})
          this.setState({ltcmsg1: "No arbitrage FOR LITECOIN going on now"})
        }
        if((this.state.coinbaseLTC - this.state.gdaxLTC) <0 ){
          if (   100*(this.state.gdaxLTC - this.state.coinbaseLTC)/this.state.coinbaseLTC > this.state.triggerPercent  ){
            this.setState({arbt8: true})
            this.setState({ltcmsg2: "buy LTC in coinbase and sell it on gdax"})
          }
          else{
            this.setState({arbt8: false})
            this.setState({ltcmsg2: "No arbitrage FOR LITECOIN going on now"})
          }
        }
        else if ((this.state.coinbaseLTC - this.state.gdaxLTC) > 0 ) {
          if (   100*(this.state.coinbaseLTC - this.state.gdaxLTC)/this.state.gdaxLTC > this.state.triggerPercent  ){
            this.setState({arbt8: true})
            this.setState({ltcmsg2: "buy LTC in gdax and sell it on coinbase"})
          }
          else{
            this.setState({arbt8: false})
            this.setState({ltcmsg2: "No arbitrage FOR LITECOIN going on now"})
          }
        }//third stage
        else{
          this.setState({arbt8: false})
          this.setState({ltcmsg2: "No arbitrage FOR LITECOIN going on now"})
        }
        if((this.state.poloniexLTC - this.state.gdaxLTC) <0 ){
          if (   100*(this.state.gdaxLTC - this.state.poloniexLTC)/this.state.poloniexLTC > this.state.triggerPercent  ){
            this.setState({arbt9: true})
            this.setState({ltcmsg3: "buy LTC in poloniex and sell it on gdax"})
          }
          else{
            this.setState({arbt9: false})
            this.setState({ltcmsg3: "No arbitrage for LITECOIN going on now"})
          }
        }
        else if ((this.state.poloniexLTC - this.state.gdaxLTC) > 0 ) {
          if (   100*(this.state.poloniexLTC - this.state.gdaxLTC)/this.state.gdaxLTC > this.state.triggerPercent  ){
            this.setState({arbt9: true})
            this.setState({ltcmsg3: "buy LTC in gdax and sell it on poloniex"})
          }
          else{
            this.setState({arbt9: false})
            this.setState({ltcmsg3: "No arbitrage for LITECOIN going on now"})
          }
        }
        else{
          this.setState({arbt9: false})
          this.setState({ltcmsg3: "No arbitrage for LITECOIN going on now"})
        }//end of LITECOIN PHASE




      }
    },1000)
  }


  handleChange(event) {

    console.log(event.target.value)
    this.setState({
      triggerPercent: event.target.value
    });
  }

  handleSubmit(event) {
    alert('the percentage for arbitrage was changed to: ' + this.state.triggerPercent);
    event.preventDefault();
  }





  render() {


    let params={
      'currency': true,
      'commafy':true,
      'precision':2,
      'currencyIndicator':'USD',
      'shortFormat':true
    }

    return (
      <div>
        <header>
          <h1>
            Arbitrage
            <hr></hr>
          </h1>
        </header>


        <main>

          <table>
            <caption>COINBASE</caption>
            <tr>
              <td>BTC</td>
              <td>ETH</td>
              <td>LTC</td>
            </tr>
            <tr>
              <td>${parseFloat(this.state.coinbaseBTC).toFixed(2)} </td>
              <td>${parseFloat(this.state.coinbaseETH).toFixed(2)} </td>
              <td>${parseFloat(this.state.coinbaseLTC).toFixed(2)}  </td>
            </tr>
          </table>


          <table>
            <caption>POLONIEX</caption>
            <tr>
              <td>BTC</td>
              <td>ETH</td>
              <td>LTC</td>
            </tr>
            <tr>
              <td>${parseFloat(this.state.poloniexBTC).toFixed(2)} </td>
              <td>${parseFloat(this.state.poloniexETH).toFixed(2)} </td>
              <td>${parseFloat(this.state.poloniexLTC).toFixed(2)}  </td>
            </tr>
          </table>


          <table>
            <caption>GADAX</caption>

            <tr>
              <td>BTC</td>
              <td>ETH</td>
              <td>LTC</td>
            </tr>
            <tr>
              <td>${parseFloat(this.state.gdaxBTC).toFixed(2)} </td>
              <td>${parseFloat(this.state.gdaxETH).toFixed(2)} </td>
              <td>${parseFloat(this.state.gdaxLTC).toFixed(2)}  </td>
            </tr>
          </table>



          <form >
            <label>
              Change Percent Arbitrage:
              <input type="number" value={this.state.triggerPercent} onChange={this.handleChange} />
            </label>

          </form>


          <div>

            {this.state.arbt1?<div className="green"><h1> Coinbase vs Poloniex    -   {this.state.btcmsg1}</h1></div> : <div className="info"><h1> Coinbase vs Poloniex    -   {this.state.btcmsg1}</h1></div>}
            {this.state.arbt2?<div className="green"><h1> Coinbase vs Gdax        -   {this.state.btcmsg2}</h1></div> : <div className="info"><h1> Coinbase vs Gdax        -   {this.state.btcmsg2}</h1></div>}
            {this.state.arbt3?<div className="green"><h1> Poloniex vs Gdax        -   {this.state.btcmsg3}</h1></div> : <div className="info"><h1> Poloniex vs Gdax        -   {this.state.btcmsg3}</h1></div>}
            {this.state.arbt4?<div className="green"><h1> Coinbase vs Poloniex    -   {this.state.ethmsg1}</h1></div> : <div className="info"><h1> Coinbase vs Poloniex    -   {this.state.ethmsg1}</h1></div>}
            {this.state.arbt5?<div className="green"><h1> Coinbase vs Gadax       -   {this.state.ethmsg2}</h1></div> : <div className="info"><h1> Coinbase vs Gadax       -   {this.state.ethmsg2}</h1></div>}
            {this.state.arbt6?<div className="green"><h1> Poloniex vs Gdax        -   {this.state.ethmsg3}</h1></div> : <div className="info"><h1> Poloniex vs Gdax        -   {this.state.ethmsg3}</h1></div>}
            {this.state.arbt7?<div className="green"><h1> Coinbase vs Poloniex    -   {this.state.ltcmsg1}</h1></div> : <div className="info"><h1> Coinbase vs Poloniex    -   {this.state.ltcmsg1}</h1></div>}
            {this.state.arbt8?<div className="green"><h1> Coinbase vs Gdax        -   {this.state.ltcmsg2}</h1></div> : <div className="info"><h1> Coinbase vs Gdax        -   {this.state.ltcmsg2}</h1></div>}
            {this.state.arbt9?<div className="green"><h1> Poloniex vs Gdax        -   {this.state.ltcmsg3}</h1></div> : <div className="info"><h1> Poloniex vs Gdax        -   {this.state.ltcmsg3}</h1></div>}

</div>



<div className='coin'>
  <BitcoinCoinbase
    handlecoinbaseBTH={(bitcoin)=> this.handlecoinbaseBTH(bitcoin)}
    />
</div>
<div className='coin'>
  <EthereumCoinbase
    handlecoinbaseETH={(ethereum)=> this.handlecoinbaseETH(ethereum)}
    />
</div>
<div className='coin'>
  <LitecoinCoinbase
    handlecoinbaseLTC={(litecoin)=> this.handlecoinbaseLTC(litecoin)}
    />
</div>
<div className='coin'>
  <Poloniex
    handlepoloniexBTCETHLTC={(bitcoin, ethereum, litecoin)=> this.handlepoloniexBTCETHLTC(bitcoin, ethereum, litecoin)}
    />
</div>
<div className='coin'>
  <Gdax
    handlegdaxBTCETHLTC={(bitcoin, ethereum, litecoin)=> this.handlegdaxBTCETHLTC(bitcoin, ethereum, litecoin)}
    />
</div>

</main>




</div>
);
}
}

export default App;
