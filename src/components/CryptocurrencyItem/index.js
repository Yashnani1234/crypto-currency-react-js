// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  // eslint-disable-next-line camelcase
  const {currencyName, usdValue, euroValue, currency_logo} = currencyData
  return (
    <li className="crypto-table">
      <div className="info">
        <img
          className="currency-image"
          // eslint-disable-next-line camelcase
          src={currency_logo}
          alt="currency_name"
        />
        <p className="currency-name">{currencyName}</p>
      </div>
      <p className="usd-value">{usdValue}</p>
      <p className="euro-value">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
