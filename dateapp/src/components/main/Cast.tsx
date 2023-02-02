


const Cast = ({cast}:{
    cast:any
}) => {
    return(<>
        <h4>Cast</h4>
        <div className="main__toWatch">
          {cast.slice(0,10).map((info:any,index:number)=>{
          return (
            <div className="main__cast" key ={index}>
              <img className="main__toWatch-logo" src={`https://image.tmdb.org/t/p/original${info.profile_path}`}/>
              <p>{info.name}</p>
            </div>
          )})}
        </div>
      </>)
}

export default Cast;