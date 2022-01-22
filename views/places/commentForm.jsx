const React = require("react");

module.exports = function ({ placeId }) {
  return (
    <div class="card m-5">
      <div class="card-header">Got your own rants or raves?</div>
      <div class="card-body">
        <form action={`${placeId}/comment`} method="POST">
          <div className="p-4">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="content"
                name="content"
                style={{ height: "100px" }}
              ></textarea>
              <label htmlFor="floatingTextarea2">What did you think?</label>
            </div>
          </div>
          <div className="row p-4">
            <div className="col">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                className="form-control"
                id="author"
                name="author"
                aria-describedby="authorHelp"
                placeholder="Anonymous"
              />
            </div>
            <div className="col">
              <label htmlFor="stars">Star Rating</label>
              <input
                aria-describedby="starsHelp"
                className="form-range"
                id="stars"
                max="5"
                min="0"
                name="stars"
                required
                step="0.5"
                type="range"
              />
            </div>
            <div className="col">
              <input
                id="rant"
                name="rant"
                type="checkbox"
                class="btn-check"
                id="rant"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" htmlFor="rant">
                Rant?
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
