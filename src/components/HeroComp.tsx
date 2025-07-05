import { useState } from 'react'
import GobelinLoader from './Hero/GobelinLoader'
import GobelinHero from './Hero/GobelinHero'

const HeroComp = () => {
  const [showLoader] = useState(false)
  return (
    <>
      {showLoader ? <GobelinLoader /> : <GobelinHero />  }
    </>
  )
}

export default HeroComp