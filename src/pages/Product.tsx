import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../types'

export default function Product() {
  const { name } = useParams()

  const country = useSelector((state: AppState) =>
    state.countries.all.find((p) => p.name === name)
  )

  if (!country) {
    return <div>Country Not Found</div>
  }

  return (
    <>
      <h1>{country.name}</h1>
      <img src={country.flag} alt="" />
    </>
  )
}
