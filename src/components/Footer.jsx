import {GiBasketballBasket} from 'react-icons/gi'
import {GiBasketballJersey} from 'react-icons/gi'

const Footer = ({footerDate}) => {
  return (
    <footer>
        <span><GiBasketballBasket /></span>
        <p>{footerDate.current} Andrija Petrovic</p>
        <span><GiBasketballJersey /></span>
    </footer>
  )
}

export default Footer