const React = require("react");
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const Def = require("../layouts/default");

function show({ place, index }) {
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-12 col-md-6 p-3">
            <img src={place.pic} alt={place.name} />
          </div>
          <div className="col-sm-12 col-md-6 p-3">
            <div className="row p-3">
              <div className="col-sm-12 p-1">
                <a href={`/places/${index}/edit`} className="btn btn-warning">
                  Edit <FaEdit />
                </a>
              </div>
              <div className="col-sm-12 p-1">
                <form method="POST" action={`/places/${index}?_method=DELETE`}>
                  <button type="submit" className="btn btn-danger">
                    Delete <FaTrashAlt />
                  </button>
                </form>
              </div>
            </div>
            <h1>{place.name}</h1>
            <p>Rating</p>
            <p>not Rated</p>
            <p>description</p>
            <p>blah blah</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 p-3">
            <h2>Comments</h2>
            <p>no comments yet</p>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
