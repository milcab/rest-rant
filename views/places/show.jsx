const React = require("react");
const Def = require("../layouts/default");

function show({ place }) {
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img src={place.pic} alt={place.name} />
          </div>
          <div className="col-sm-12 col-md-6">
            <h1>{place.name}</h1>
            <p>Rating</p>
            <p>not Rated</p>
            <p>description</p>
            <p>blah blah</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h2>Comments</h2>
            <p>no comments yet</p>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
