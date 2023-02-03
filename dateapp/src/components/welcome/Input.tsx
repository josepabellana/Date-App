



const Input = ({query,setQuery}:{
    query:any,
    setQuery:any
})=>{


    return (<input
        className="welcome__input"
        type="text"
        value={query}
        placeholder = "Search films or TV series(TBD)"
        onChange={(event) => setQuery(event.target.value)}
      ></input>)
}


export default Input;