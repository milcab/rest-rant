const React = require("react");
const Def = require("../layouts/default");

function Index(data) {
  let message = "";

  if (data.message) {
    message = <h4 className="alert-danger">{data.message}</h4>;
  }

  return (
    <Def>
      <main>
        <h1 className="blue">Add a New Place</h1>
        {message}
        <form action="/places" method="POST">
          <div className="form-group">
            <label htmlFor="placeName">Place Name</label>
            <input
              required
              type="text"
              className="form-control"
              id="placeName"
              name="name"
              aria-describedby="placeHelp"
              placeholder="Enter Place Name"
            />

            <label htmlFor="placeName">Place Picture</label>
            <input
              required
              type="text"
              className="form-control"
              id="placeName"
              name="picture"
              aria-describedby="placeHelp"
              placeholder="Enter Picture"
            />
            <label htmlFor="placeName">City</label>
            <input
              type="text"
              className="form-control"
              id="placeName"
              name="city"
              aria-describedby="placeHelp"
              placeholder="Enter City"
            />
            <label htmlFor="placeName">State</label>
            <input
              type="text"
              className="form-control"
              id="placeName"
              name="state"
              aria-describedby="placeHelp"
              placeholder="Enter State Name"
            />
            <label htmlFor="placeName">Cuisines</label>
            <input
              type="text"
              className="form-control"
              id="placeName"
              name="cuisines"
              aria-describedby="placeHelp"
              placeholder="Cuisines Name :-)"
            />
            <small id="placeHelp" className="form-text text-muted">
              We love place!
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="founded">Founded Year</label>
            <input
              className="form-control"
              id="founded"
              name="founded"
              type="number"
              value={new Date().getFullYear()}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="url"
              className="form-control"
              id="imageUrl"
              name="pic"
              placeholder="https://place.com/bestPlace.jpg"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = Index;
