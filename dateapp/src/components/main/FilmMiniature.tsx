


const FilmMiniature = ({result, setSelected,}:{
    result:{
        id:number,
        title:string,
        poster_path:string,
        
    },
    setSelected:any,
}) => {


    return(
    <div className="miniature__container" onClick={() => setSelected(result)}>
        <img src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} className="miniature__logo" ></img>
        
        <div className="miniature__title" key={result.id}>{result.title}</div>
    </div>
    )
}


export default FilmMiniature;