import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

import { AppState } from '../types'
// import { addProduct, removeProduct } from '../redux/actions'
import { getCountries } from '../redux/actions/countries'
import { ProductCard } from '../components/ProductCard/ProductCard'

import './Home.css'
import { Header } from '../components/Header/Header'

export default function Home() {
  const dispatch = useDispatch()

  const countries = useSelector((state: AppState) => state.countries.all)

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <div className="home">
      <Header />
      <div className="products" id="products">
        {countries?.map((e) => (
          <ProductCard
            key={e.name}
            name={e.name}
            flag={e.flag}
            population={e.population}
            region={e.region}
            languages={e.languages}
          />
        ))}
      </div>
    </div>
  )
}
