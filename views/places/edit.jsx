const React = require("react");
const Def = require("../layouts/default");
// views/layouts/default.jsx
function Index({ place }) {
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
        <form action="edit?_method=PUT" method="POST">
          <div className="form-group">
            <label for="placeName">Place Name</label>
            <input
              required
              type="text"
              className="form-control"
              id="placeName"
              name="name"
              value={place.name}
              aria-describedby="placeHelp"
              placeholder="Enter Place Name"
            />

            <label for="placeName">Place Picture</label>
            <input
              required
              type="text"
              className="form-control"
              id="placeName"
              name="picture"
              value={place.picture}
              aria-describedby="placeHelp"
              placeholder="Enter Picture"
            />
            <label for="placeName">City</label>
            <input
              type="text"
              className="form-control"
              id="placeName"
              name="city"
              value={place.city}
              aria-describedby="placeHelp"
              placeholder="Enter City"
            />
            <label for="placeName">State</label>
            <input
              type="text"
              className="form-control"
              id="placeName"
              name="state"
              value={place.state}
              aria-describedby="placeHelp"
              placeholder="Enter State Name"
            />
            <label for="placeName">Cuisines</label>
            <input
              type="text"
              className="form-control"
              id="placeName"
              name="cuisines"
              value={place.cuisines}
              aria-describedby="placeHelp"
              placeholder="Cuisines Name :-)"
            />
            <small id="placeHelp" className="form-text text-muted">
              We love place!
            </small>
          </div>
          <div className="form-group">
            {/* <label for="imageUrl">Image URL</label>
            <input
              type="url"
              className="form-control"
              id="imageUrl"
              value={place.pic}
              name="pic"
              placeholder="https://place.com/bestPlace.jpg"
            /> */}
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
