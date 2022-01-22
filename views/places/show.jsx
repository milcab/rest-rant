const React = require("react");
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const Def = require("../layouts/default");
const CommentForm = require("./commentForm");

function Comments({ comments }) {
  if (!comments.length) {
    return <h4>No comments yet</h4>;
  }

  return comments.map((comment) => (
    <div className="border">
      <h2 className="rant">{comment.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
      <h4>{comment.content}</h4>
      <h3>
        <stong>- {comment.author}</stong>
      </h3>
      <h4>Rating: {comment.stars}</h4>
    </div>
  ));
}

function Controls({ data }) {
  return (
    <div className="d-flex justify-content-center">
      <div>
        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
          Edit <FaEdit />
        </a>
      </div>
      <div>
        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete <FaTrashAlt />
          </button>
        </form>
      </div>
    </div>
  );
}

function Rating(data) {
  if (!data.place.comments.length) {
    return <h3 className="inactive">Not yet rated</h3>;
  }

  let sumRatings = data.place.comments.reduce((tot, c) => {
    return tot + c.stars;
  }, 0);

  let averageRating = Math.round(sumRatings / data.place.comments.length);

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
                <Rating data={data} />
              </div>
              <div>
                <h2 className="color-change col-sm-12">Description</h2>
                <p className="col-sm-12">{data.place.showEstablished()}</p>
              </div>
              <div>
                <h2 className="color-change col-sm-12">Cuisine</h2>
                <p className="col-sm-12">serving {data.place.cuisines}</p>
              </div>
              <Controls data={data} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 p-3">
            <h2 className="color-change">Comments</h2>
            <Comments comments={data.place.comments} />

            <CommentForm placeId={data.place.id} />
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
