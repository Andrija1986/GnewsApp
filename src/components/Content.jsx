import { addIndex } from "../date"
import Card from "./Card"

const Content = ({data}) => {


    if(data.loading) return <p>Loading...</p>
    if(data.error) return <p>{data.error}</p>

    const newData = addIndex(data.results.articles);

    const newsCard = newData.map((item) => (
    <Card 
        key={item.id}
        title={item.title}
        url={item.url}
        image={item.image} /> ))



  return (
    <section>
        {newData.length > 0 ? 
        (<ul>{newsCard}</ul>) : 
        (<h1>No Results Found!</h1>)}
    </section>
  )
}

export default Content