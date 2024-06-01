'use client'

import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Filter from './components/Filter'

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
  const [filter, setFilter] = useState({
    propertyType: '',
    minPrice: '',
    maxPrice: '',
    bedroom: '',
    area: ''
  });

  const { loading, error, data, fetchMore, refetch } = useQuery(GET_PROPERTIES, {
      variables: { property_type: '', minPrice: '', maxPrice: '', bedroom: '', area: '', skip: 0, take: 30 }
  });
  
  const submit = () => {
    refetch({ property_type: filter.propertyType, minPrice: filter.minPrice, maxPrice: filter.maxPrice, bedroom: filter.bedroom, area: filter.area, skip: 0, take: 30 });
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
    <div>
      <h2>Properties</h2>
      <Filter filter={filter} setFilter={setFilter} submit={submit} />
      <ul>
        {data.properties.map((property) => (
          <li key={property.id}>
            {property.title} - price {property.price} - type {property.property_type} - area {property.area} - bedroom {property.bedroom}
          </li>
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
}