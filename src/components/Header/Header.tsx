import { ShoppingBasket } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeProduct } from '../../redux/actions'
import { AppState, Country } from '../../types'

import './Header.css'

export const Header = () => {
  const basket = useSelector((state: AppState) => state.product.inCart)

  const [showBasket, setShowBasket] = useState(false)

  const dispatch = useDispatch()

  const handleRemoveProduct = (country: Country) => {
    dispatch(removeProduct(country))
  }

  return (
    <header className="header">
      <div className="header__level__one">
        <Link to="/" className="header__logo">
          Countries
        </Link>
        <button
          className="header__optionBasket"
          onClick={() => setShowBasket(!showBasket)}
        >
          <ShoppingBasket />
          <span className="header__option__lineTwo header__basketCount">
            {basket.length}
          </span>
        </button>
      </div>
      {showBasket && (
        <div className="header__level__two">
          {basket?.map((e) => (
            <div className="basket__item" key={e.name}>
              <div className="basket__item__left">
                <img src={e.flag} alt="" />
                <h4>{e.name}</h4>
              </div>
              <div className="basket__item__right">
                <button onClick={() => handleRemoveProduct(e)}>remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
