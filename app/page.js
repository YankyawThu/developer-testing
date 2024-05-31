'use client'

import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PROPERTIES = gql`
  query GetProperties($skip: Int, $take: Int) {
    properties(skip: $skip, take: $take) {
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

  const { loading, error, data, fetchMore } = useQuery(GET_PROPERTIES, {
      variables: { skip: 0, take: 30 }
  });

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
      <ul>
        {data.properties.map((property) => (
          <li key={property.id}>
            {property.title} - {property.price}
          </li>
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
}