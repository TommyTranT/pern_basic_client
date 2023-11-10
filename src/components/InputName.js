import { Fragment, useState } from "react";

const InputName = () => {
  const [name, setName] = useState("");

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Name List</h1>
      <form className="d-flex mt-5">
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputName;
