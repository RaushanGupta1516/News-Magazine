import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const Newsbox = ({category}) => {
    const [news, setnews] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=38a81b77e6bf4020898c6409f38da160`;
            let res = await fetch(url);
            let data = await res.json();
            setnews(data.articles);
            console.log(data);
          };
    
          fetchData();

    },[category])
  return (
      <div>
          <h2 style={{textAlign:"center",marginTop:"10px"}}>Trending <span className="badge text-bg-danger">News</span></h2>
      <div className="newscontainer" style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
      {news.map((info, index) => (
                <Newsitem 
                    key={index} 
                    imglink={info.urlToImage} 
                    title={info.title} 
                    desp={info.description} 
                    newlink={info.url} 
                />
            ))}
            </div>
    </div>
  )
}
export default Newsbox;
