import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <><div className="form-card">
        <form onSubmit={props.formSubmissionHandler}>
          <div className="form-group">
            <label for="brand">Brand: </label>
            <input type='text' name='brand' class="form-control" />
          </div>   
          <div className="form-group">
            <label for="name">Name: </label>
            <input type='text' name='name' class="form-control" />
          </div>
          <div className="form-group">
            <label for="price">Price: </label>
            <input type='text' name='price' class="form-control" />
          </div>
          <div className="form-group">
            <label for="abv">ABV: </label>
            <input type='text' name='abv' class="form-control" />
          </div>
          <div className="form-group">
            <label for="img">Image URL: </label>
            <input type='text' name='img' class="form-control" />
          </div>
          <button type='submit' class="btn btn-outline-info">{props.buttonText}</button>
        </form>
      </div>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;