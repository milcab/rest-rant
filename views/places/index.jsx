const React = require("react");
const Default = require("../layouts/default");

function Index({ places }) {
  let placesFormatted = places.map((place, index) => {
    return (
      <div className="col-sm-6 col-md-4">
        <h2>
          <a href={`/places/${index}`}>{place.name}</a>
        </h2>
        <p className="text-center">{place.cuisines}</p>
        <img src={place.pic} alt={place.name} />
        <p className="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    );
  });

  return (
    <Default>
      <h1>Places Page</h1>
      <div className="row">{placesFormatted}</div>
    </Default>
  );
}

module.exports = Index;
