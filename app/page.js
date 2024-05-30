'use client'

import Image from "next/image";
import { useEffect, useState } from 'react';

export default function Home() {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    fetch('/api/property')
      .then(response => response.json())
      .then(data => setProperty(data));
  }, []);

  return (
    <div>
      <h1>Property</h1>
      <ul>
        {property.map(property => (
          <li key={property.id}>{property.project_name} - {property.title}</li>
        ))}
      </ul>
    </div>
  );
}
