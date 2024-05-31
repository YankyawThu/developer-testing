'use client'

import { useState, useEffect, useRef } from 'react';

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef();
  const limit = 30; // Number of items per page

  useEffect(() => {
    const loadProperties = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/property?page=${page}&limit=${limit}`);
        const data = await res.json();

        setProperties((prev) => [...prev, ...data.properties]);
        console.log('properties', properties);
        setHasMore(data.properties.length === limit);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
      setLoading(false);
    };

    loadProperties();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore]);

  return (
    <div>
      <h1>Properties</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>{property.title}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      <div ref={observerRef}></div>
    </div>
  );
}