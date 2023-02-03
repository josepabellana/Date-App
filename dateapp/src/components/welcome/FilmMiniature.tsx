


const FilmMiniature = ({result, setSelected,setQuery}:{
    result:{
        id:number,
        title:string,
        poster_path:string,
    },
    setSelected:any,
    setQuery:any
}) => {


    return(
    <div className="result__container" onClick={() => {setSelected(result); setQuery('') }}>
        <img src={`https://image.tmdb.org/t/p/original/${result.poster_path}`} className="result__logo" ></img>
        <h3 className="result__title" key={result.id}>{result.title}</h3>
    </div>
    )
}


export default FilmMiniature;