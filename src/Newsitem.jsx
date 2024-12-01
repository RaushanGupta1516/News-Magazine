import "./Newsitem.css"
const Newsitem = ({imglink , title, desp, newlink}) => {
  return (
    <div className="card bg-dark text-light m-3 px-2 py-2 d-inline-block"  style={{ maxWidth:"345px",overflow:"none",height:"407px"}}>
  <img src={imglink?imglink:"newspic.jpg"} style={{height:"200px",width:"327.4px",}} className="card-img-top" alt="no pic"/>
  <div className="card-body">
              <h5 className="card-title">{ title?title.slice(0,50):"This is the Title of the News."}</h5>
              <p className="card-text">{ desp? desp.slice(0,50):"This is the Description of the news!"}</p>
    <a href={newlink} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}
export default Newsitem;