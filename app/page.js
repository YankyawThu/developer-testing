'use client'

import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Filter from './components/Filter'
import Property from './components/Property'

const GET_PROPERTIES = gql`
  query GetProperties($property_type: String, $minPrice: String, $maxPrice: String, $bedroom: String, $area: String, $skip: Int, $take: Int) {
    properties(property_type: $property_type, minPrice: $minPrice, maxPrice: $maxPrice, bedroom: $bedroom, area: $area, skip: $skip, take: $take) {
      id
      project_name
      title
      property_description
      property_type
      price
      bedroom
      area
      image1
      image2
      image3
      image4
      image5
    }
  }
`;

export default function Properties() {
  const [page, setPage] = useState(1);
  const limit = 10
  const [filter, setFilter] = useState({
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedroom: '',
    area: ''
  });

  const { loading, error, data, fetchMore, refetch } = useQuery(GET_PROPERTIES, {
      variables: { property_type: '', minPrice: '', maxPrice: '', bedroom: '', area: '', skip: 0, take: limit }
  });
  
  const submit = () => {
    refetch({ property_type: filter.propertyType, minPrice: filter.minPrice, maxPrice: filter.maxPrice, bedroom: filter.bedroom, area: filter.area, skip: 0, take: limit });
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        skip: data.properties.length,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prevResult;
        return {
          ...prevResult,
          properties: [
            ...prevResult.properties,
            ...fetchMoreResult.properties,
          ],
        };
      },
    });
    setPage(page + 1);
  };

  return (
    <div className='px-5 py-7'>
      <div className='banner flex flex-col justify-center items-center rounded-xl'>
        <div>
          <div>
            <div className='banner-title py-1 text-3xl font-bold text-white text-center'>Thailand's Best Rental Homes</div>
            <div className='banner-sub-title py-1 text-lg font-bold text-white text-center'>Discover a home you will love to live in on Thailand's leading marketplace for rental property</div>
          </div>
          <Filter filter={filter} setFilter={setFilter} submit={submit} />
        </div>
      </div>
      <div className='mt-10 mx-8'>
        <div className='text-lg font-bold'>Rental properties in Thailand</div>
        <div className='text-sm text-gray-500'>Explore your short and long term rental options across different markets in Thailand</div>
        <div className='my-5 flex flex-col'>
          {data.properties.map(property => (
            <Property property={property} />
          ))}
        </div>
        <div className='flex flex-col items-center'>
          {loading && <>Loading...</>}
          <button onClick={handleLoadMore} className='py-2 px-3 border-2 border-blue-600 rounded-lg'>Load More</button>
        </div>
      </div>
    </div>
  );
}