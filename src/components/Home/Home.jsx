
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Current from '../Current/Current'
import cl from './home.module.css'

const Home = () => {
  const [dollar, setDollar] = useState()
  const [euro, setEuro] = useState()

  useEffect(() => {
    axios
      .get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then((response) => {
        setDollar(response.data[26].rate.toFixed(2))
        setEuro(response.data[32].rate.toFixed(2))
      })
  }, [])


  return (
    <div>
      <div className={cl.header}>
        <div className={cl.header_wrapper}>
          <h3 style={{ marginRight: '1rem' }}>Сurrent exchange rate:</h3>
          <div style={{display: 'flex'}}>
            <div className={cl.money_block}>
              <h3>USD:</h3>
              <p>{dollar}</p>
            </div>
            <div className={cl.money_block}>
              <h3>EUR:</h3>
              <p>{euro}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cl.app_wrapper}>
        <h3 style={{ marginBottom: '0' }}>Currency Converter</h3>
        <Current currencies={[
          { name: 'UAH', rate: 1 },
          { name: 'USD', rate: 0.03529 },
          { name: 'EUR', rate: 0.03117 },
        ]} />
      </div>
    </div>
  )
}

export default Home