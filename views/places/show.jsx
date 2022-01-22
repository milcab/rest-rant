const React = require("react");
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const Def = require("../layouts/default");
const CommentForm = require("./commentForm");

function Comments({ comments, placeId }) {
  if (!comments.length) {
    return <h4>No comments yet</h4>;
  }

  return (
    <div className="d-flex flex-wrap ">
      {comments.map((comment) => (
        <div
          className="col card mx-4 mb-4 flex-grow-1"
          style={{ minWidth: "250px", maxWidth: "250px" }}
        >
          <div className="card-body">
            <h2 className="card-title rant">
              {comment.rant ? "Rant! 😡" : "Rave! 😻"}
            </h2>
            <h6 className="card-subtitle mb-2 text-muted">
              Rating: {comment.stars}
            </h6>
            <p className="card-text">{comment.content}</p>
            <p className="card-footer">
              <stong>- {comment.author || "Anonymous"}</stong>
            </p>
            <form
              method="POST"
              action={`/places/${placeId}/comment/${comment.id}?_method=DELETE`}
            >
              <input
                type="submit"
                className="btn btn-danger"
                value="Delete Comment"
              />
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}

function Controls({ placeId }) {
  return (
    <div className="d-flex justify-content-center">
      <div className="me-4">
        <a href={`/places/${placeId}/edit`} className="btn btn-warning">
          Edit <FaEdit />
        </a>
      </div>
      <div>
        <form method="POST" action={`/places/${placeId}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete <FaTrashAlt />
          </button>
        </form>
      </div>
    </div>
  );
}

function Rating({ comments }) {
  if (!comments.length) {
    return <h3 className="inactive">Not yet rated</h3>;
  }

  let sumRatings = comments.reduce((tot, c) => {
    return tot + c.stars;
  }, 0);

  let averageRating = Math.round(sumRatings / comments.length);

  let stars = "";

  for (let i = 0; i < averageRating; i++) {
    stars += "⭐️";
  }

  return <h3>{stars} stars</h3>;
}

function show(data) {
  return (
    <Def>
      <main>
        <div className="row p-4">
          <div className="col-sm-12 col-md-6 p-3">
            <img
              className="img-fluid"
              src={data.place.pic}
              alt={data.place.name}
            />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-12 col-md-6 p-3">
            <div className="">
              <h1 className="col-sm-12">{data.place.name}</h1>

              <div>
                <h2 className="color-change col-sm-12">Rating</h2>
                <Rating comments={data.place.comments} />
              </div>
              <div>
                <h2 className="color-change col-sm-12">Description</h2>
                <p className="col-sm-12">{data.place.showEstablished()}</p>
              </div>
              <div>
                <h2 className="color-change col-sm-12">Cuisine</h2>
                <p className="col-sm-12">serving {data.place.cuisines}</p>
              </div>
              <Controls placeId={data.place.id} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 p-3">
            <h2 className="color-change">Comments</h2>
            <Comments comments={data.place.comments} placeId={data.place.id} />

            <CommentForm placeId={data.place.id} />
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
