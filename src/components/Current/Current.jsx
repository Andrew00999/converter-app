import React, { Component } from 'react'
import cl from './current.module.css'

class CurrencyConverter extends Component {
  state = {
    currency: this.props.currencies[0].name,
    value: 0,
  }

  onChange = ({ target: { value, dataset: { currency } } }) => {
    this.setState({
      currency,
      value,
    });
  }

  render() {
    const { currency, value } = this.state;
    const { rate } = this.props.currencies.find(n => n.name === currency);

    return (
      <div style={{ marginTop: '1rem' }}>
        {this.props.currencies.map(n => (
          <div>
            {n.name}
            <div>
              <input
                data-currency={n.name}
                value={currency === n.name ? value : (value / rate * n.rate).toFixed(2)}
                onChange={this.onChange}
                className={cl.input}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CurrencyConverter;