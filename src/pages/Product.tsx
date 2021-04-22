import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../types'

import './Product.css'
import { Header } from '../components/Header/Header'
import { addProduct } from '../redux/actions'

export default function Product() {
  const { name } = useParams()

  const country = useSelector((state: AppState) =>
    state.countries.all.find((p) => p.name === name)
  )

  const dispatch = useDispatch()

  const handleAddProduct = (country: any) => {
    dispatch(addProduct(country))
  }

  if (!country) {
    return <div>Country Not Found</div>
  }

  return (
    <div className="container">
      <Header />
      <div className="country__details">
        <img className="country__detail__image" src={country.flag} alt="" />
        <div className="country__details__info">
          <h1>{country.name}</h1>
          <h3>Region: {country.region}</h3>
          <h3>Population: {country.population}</h3>
          <ul>
            {country.languages.map((e) => (
              <li key={e.iso639_1}>{e.name}</li>
            ))}
          </ul>
          <button onClick={() => handleAddProduct(country)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
