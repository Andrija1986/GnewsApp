import {useState, useEffect, useRef} from 'react';
import {getDate} from './date'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';

const App = () => {

  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null
  })
  const [search, setSearch] = useState('gr');
  const [language, setlanguage] = useState('el');

  //const todaysDate = useRef(new Date().toJSON().slice(0,10));
  const footerDate = useRef(new Date().getFullYear());
  const searchRef = useRef();


  const API_KEY = process.env.REACT_APP_API_KEY_GNEWS;
  const URL = `https://gnews.io/api/v4/search?q=${search}&lang={language}&country='el'&max=10&token=${API_KEY}`;

  const submitHandler = (e) => {
    e.preventDefault()
    setSearch(searchRef.current.value)
    searchRef.current.value = '';
    searchRef.current.focus();
  }

  useEffect(()=> {
    setData({
    results: null,
    loading: true,
    error: null
  })

  fetch(URL)
  .then((response) => response.json())
  .then((results) => setData({
    results,
    loading: false,
    error: null
  }))
  .catch((error) => setData({
    results: null,
    loading: false,
    error
  }))

  }, [URL])
  
  
  
  return (
    <main>
      <Header 
      submitHandler={submitHandler}
      language={language}
      searchRef={searchRef}
      todaysDateDisplay={getDate()}/>
      <Content data={data}/>
      <Footer footerDate={footerDate}/>
    </main>
  );
}

export default App;

