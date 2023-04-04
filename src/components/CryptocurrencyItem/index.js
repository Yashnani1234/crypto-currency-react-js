// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyData
  return (
    <div className="crypto-table">
      <div className="info">
        <img className="currency-image" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <p className="usd-value">{usdValue}</p>
      <p className="euro-value">{euroValue}</p>
    </div>
  )
}

export default CryptocurrencyItem
