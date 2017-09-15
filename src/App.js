import React, { Component } from 'react';
import './App.css';
import BitcoinCoinbase from './coinbaseExchange/BitcoinCoinbase.js'
import Poloniex from './poloniexExchange/Poloniex.js'
import Gdax from './gdaxExchange/Gdax.js'
import EthereumCoinbase from './coinbaseExchange/EthereumCoinbase.js'
import LitecoinCoinbase from './coinbaseExchange/LitecoinCoinbase.js'

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
    gdaxLTC:''
  }
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



  render() {
    return (
      <div>
        <header>
          <h1>
            Arbitrage
            <hr></hr>
          </h1>
        </header>
        <h1>coinbaseBTC ----> {this.state.coinbaseBTC}</h1>
        <h1>coinbaseETH ----> {this.state.coinbaseETH}</h1>
        <h1>coinbaseLTC ----> {this.state.coinbaseLTC}</h1>

        <main>



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
            <Poloniex />
          </div>
          <div className='coin'>
            <Gdax />
          </div>

        </main>




      </div>
    );
  }
}

export default App;
