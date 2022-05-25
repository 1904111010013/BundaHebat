import '../css/Search.css';

function Search() {
    return (
        <div className='search'>
            <div className='search-icon'>
                <i className='fa-solid fa-magnifying-glass'></i>
            </div>
            <input type='text' placeholder='Cari...' />
            <button>Cari</button>
        </div>
    );
}

export default Search;