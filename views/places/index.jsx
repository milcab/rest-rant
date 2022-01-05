const React = require("react");
const Default = require("../layouts/default");

function Index({ places }) {
  let placesFormatted = places.map((place, index) => {
    return (
      <div className="col-sm-6 col-md-4">
        <div className="card">
          <img src={place.pic} alt={place.name} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">
              <a href={`/places/place/${index}`}>{place.name}</a>
            </h5>
            <p className="card-text">{place.cuisines}</p>
            <p className="card-text">
              Located in {place.city}, {place.state}
            </p>
            <a href={`/places/${index}/edit`} className="btn btn-warning">
              Edit
            </a>
            <form method="POST" action={`/places/${index}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
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
