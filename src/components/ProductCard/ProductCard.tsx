import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../../redux/actions'
import { Country, Languages } from '../../types'
import './ProductCard.css'

type ProductCardProps = {
  flag: string
  name: string
  languages: Languages[]
  population: number
  region: string
}

export const ProductCard = ({
  flag,
  name,
  population,
  languages,
  region,
}: ProductCardProps) => {
  const country: Country = { flag, name, population, languages, region }

  const dispatch = useDispatch()

  const handleAddProduct = () => {
    dispatch(addProduct(country))
  }

  return (
    <div className="productCard">
      <img src={flag} alt="national flag" />
      <div className="productCard__info">
        <h2>{name}</h2>
        <h3>Population: {population}</h3>
        <h3>Region: {region}</h3>
      </div>
      <div className="productCard__btns">
        <Link to={`/products/${name}`}>
          <button>Show Details</button>
        </Link>
        <button onClick={handleAddProduct}>Add to Cart</button>
      </div>
    </div>
  )
}
