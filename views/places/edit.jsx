const React = require("react");
const Def = require("../layouts/default");
// views/layouts/default.jsx
function Index({ place }) {
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
        <form action="edit?_method=PUT" method="POST">
          <div className="container my-4">
            <div className="row">
              <div className="form-group col-sm-4">
                <label htmlFor="placeName">Place Name</label>
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
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="placeName">Place Picture</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="placeName"
                  name="picture"
                  value={place.pic}
                  aria-describedby="placeHelp"
                  placeholder="Enter Picture"
                />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="placeName">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="placeName"
                  name="city"
                  value={place.city}
                  aria-describedby="placeHelp"
                  placeholder="Enter City"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-sm-4">
                <label htmlFor="placeName">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="placeName"
                  name="state"
                  value={place.state}
                  aria-describedby="placeHelp"
                  placeholder="Enter State Name"
                />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="placeName">Cuisines</label>
                <input
                  type="text"
                  className="form-control"
                  id="placeName"
                  name="cuisines"
                  value={place.cuisines}
                  aria-describedby="placeHelp"
                  placeholder="Cuisines Name :-)"
                />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="founded">Founded</label>
                <input
                  className="form-control"
                  id="founded"
                  name="founded"
                  value={place.founded}
                />
              </div>
            </div>
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
