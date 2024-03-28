import React from 'react';

function CountryPage({ match }) {
  const { params: { countryId } } = match;
  // Fetch country data based on countryId from data.json or any other data source
  // Here, you can fetch the specific country's data and render it

  return (
    <div>
      <h1>Country Page</h1>
      <p>Country ID: {countryId}</p>
      {/* Render detailed information about the country */}
    </div>
  );
}

export default CountryPage;
