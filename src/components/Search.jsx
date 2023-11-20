
const Search = ({ onSearch, searchTerm, setSearchTerm }) => {
    const handleChange = event => {
      setSearchTerm(event.target.value);
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      onSearch(searchTerm);
    };
  
    
  
    return (
      <div className="text-black-300 uppercase font-bold mb-3 flex mx-4">
        <form onSubmit={handleSubmit}>
          <input 
            className="py-2 px-10"
            type="search"
            name="search"
            placeholder="Buscar paciente"
            value={searchTerm}
            onChange={handleChange}
          />
          <button 
          className="py-2 px-2 bg-indigo-600 hover:bg-indigo-900 text-white font-bold uppercase rounded-lg"
          type="submit">Buscar</button>
        </form>
      </div>
    );
  };
  
  export default Search;
  