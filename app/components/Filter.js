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
        <div>
            <div className="flex flex-wrap justify-center mt-6">
                <select name='type' value={filter.propertyType} onChange={handleTypeFilterChange} className="m-1 text-gray-400 text-sm p-3 rounded-md focus:outline-none">
                    <option value="">Select type</option>
                    <option value={"sale"}>Sale</option>
                    <option value={"rent"}>Rent</option>
                </select>
                <input name="minPrice" value={filter.minPrice} onChange={handleMinPriceFilterChange} className="m-1 text-gray-400 text-sm p-3 rounded-md focus:outline-none" placeholder="Enter lowest price" />
                <input name="maxPrice" value={filter.maxPrice} onChange={handleMaxPriceFilterChange} className="m-1 text-gray-400 text-sm p-3 rounded-md focus:outline-none" placeholder="Enter highest price" />
                <select name='bedroom' value={filter.bedroom} onChange={handleBedroomFilterChange} className="m-1 text-gray-400 text-sm p-3 rounded-md focus:outline-none">
                    <option value="">Select bedroom</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
                <select name='area' value={filter.area} onChange={handleAreaFilterChange} className="m-1 text-gray-400 text-sm p-3 rounded-md focus:outline-none">
                    <option value="">Select area</option>
                    <option value={1}>800 between 1000</option>
                    <option value={2}>1000 between 1200</option>
                </select>
            </div>
            <div className="flex flex-col items-center my-3">
                <button onClick={submit} className="bg-blue-600 text-white py-3 px-4 rounded-md">Search</button>
            </div>
        </div>
    )
}

export default Filter