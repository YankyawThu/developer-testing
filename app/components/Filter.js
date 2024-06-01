const Filter = ({filter, setFilter, submit}) => {
    const handleTypeFilterChange = (event) => {
        setFilter(filter => ({...filter, propertyType: event.target.value}));
    };
    
    const handleMinPriceFilterChange = (event) => {
        setFilter(filter => ({...filter, minPrice: event.target.value}));
    };
    
    const handleMaxPriceFilterChange = (event) => {
        setFilter(filter => ({...filter, maxPrice: event.target.value}));
    };
    
    const handleBedroomFilterChange = (event) => {
        setFilter(filter => ({...filter, bedroom: event.target.value}));
    };
    
    const handleAreaFilterChange = (event) => {
        setFilter(filter => ({...filter, area: event.target.value}));
    };

    return (
        <>
            <select name='type' value={filter.propertyType} onChange={handleTypeFilterChange}>
                <option value="">Any</option>
                <option value={"sale"}>Sale</option>
                <option value={"rent"}>Rent</option>
            </select>
            <input name="minPrice" value={filter.minPrice} onChange={handleMinPriceFilterChange} />
            <input name="maxPrice" value={filter.maxPrice} onChange={handleMaxPriceFilterChange} />
            <select name='bedroom' value={filter.bedroom} onChange={handleBedroomFilterChange}>
                <option value="">Any</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            <select name='area' value={filter.area} onChange={handleAreaFilterChange}>
                <option value="">Any</option>
                <option value={1}>800 between 1000</option>
                <option value={2}>1000 between 1200</option>
            </select>
            <button onClick={submit}>Search</button>
        </>
    )
}

export default Filter