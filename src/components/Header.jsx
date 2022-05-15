import { useEffect } from "react"
import {GoSearch} from 'react-icons/go'

const Header = ({
    submitHandler,
    searchRef, 
    todaysDayDisplay}) => {

    useEffect(()=> {
        searchRef.current.focus()
    }, [searchRef])


  return (
    <header>
        <form>
            <input type="text"
            placeholder='Search'
            ref={searchRef} />
            <button onClick={submitHandler}>
                <GoSearch />
            </button>
            <p>{todaysDayDisplay}</p>
        </form>
        <h1>GNews</h1>
    </header>
  )
}

export default Header