const React = require("react");
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const Def = require("../layouts/default");

function show(data) {
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-12 col-md-6 p-3">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-12 col-md-6 p-3">
            <div className="row p-3">
              <div className="col-sm-12 p-1">
                <a
                  href={`/places/${data.place.id}/edit`}
                  className="btn btn-warning"
                >
                  Edit <FaEdit />
                </a>
              </div>
              <div className="col-sm-12 p-1">
                <form
                  method="POST"
                  action={`/places/${data.place.id}?_method=DELETE`}
                >
                  <button type="submit" className="btn btn-danger">
                    Delete <FaTrashAlt />
                  </button>
                </form>
              </div>
            </div>
            <h1>{data.place.name}</h1>
            <h2 className="color-change">Rating</h2>
            <h3>Not Rated</h3>
            <h2 className="color-change">Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>serving {data.place.cuisines}</h4>
          </div>
        </div>

        
        <div className="row">
          <div className="col-sm-12 p-3">
            <h2 className="color-change">Comments</h2>
            <h4>No comments yet</h4>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
