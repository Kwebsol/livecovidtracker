import React, { useEffect, useState } from 'react'
import './Covid.css'
const Covid = () => {
  const [covidData, setcovidData] = useState('')
  const getCovidData = async () => {
    try {
      const res = await fetch('https://api.covid19india.org/data.json')
      const actualData = await res.json()
      // console.log(actualData.statewise[0])
      setcovidData(actualData.statewise[0])
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getCovidData()
  }, [])
  return (
    <>
      <section id='covid'>
        <div className='header'>
          <h3>
            Last Updated: <span>{covidData.lastupdatedtime}</span>
          </h3>
          <br />
          <h1>Live</h1>
          <h2>Covid-19 Corona Virus Tracker</h2>
        </div>
        <div className='card country'>
          <h2>India</h2>
        </div>
        <div className='row'>
          <div className='column'>
            <div className='card confirmend'>
              <h1>Total Confirmed</h1>
              <h2>{1231312}</h2>
            </div>
          </div>
          <div className='column'>
            <div className='card active'>
              <h1>Total Active</h1>
              <h2>{covidData.active}</h2>
            </div>
          </div>
          <div className='column'>
            <div className='card recovered'>
              <h1>Total Recovered</h1>
              <h2>{covidData.recovered}</h2>
            </div>
          </div>

          <div className='column'>
            <div className='card death'>
              <h1>Total Death</h1>
              <h2>{covidData.deaths}</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Covid
