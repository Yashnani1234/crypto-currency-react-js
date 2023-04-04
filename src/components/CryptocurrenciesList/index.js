// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrienciesList extends Component {
  state = {isLoading: true, currencyData: []}

  componentDidMount() {
    this.getBlogItemData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = {
      currencyName: data.currency_name,
      usdValue: data.usd_value,
      euroValue: data.euro_value,
      currencyLogo: data.currency_logo,
      id: data.id,
    }
    this.setState({currencyData: updatedData, isLoading: false})
  }

  render() {
    const {currencyData, isLoading} = this.state
    return (
      <div>
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="currency-info">
          <div className="table_header">
            <h1>Coin Type</h1>
            <div className="head">
              <h1>USD</h1>
              <h1>EURO</h1>
            </div>
          </div>
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            currencyData.map(item => (
              <CryptocurrencyItem currencyData={item} key={item.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default CryptocurrienciesList
