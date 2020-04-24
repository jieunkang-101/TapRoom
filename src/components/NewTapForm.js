import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewTapForm(props){

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({brand: event.target.brand.value, name: event.target.name.value, price: event.target.price.value, abv: event.target.abv.value, pints: 124, id: v4()});
  }

  return (
    <React.Fragment>
      <h3>Add New Tap</h3>
      <ReusableForm 
        formSubmissionHandler={handleNewTapFormSubmission}
        buttonText="Add" />
    </React.Fragment>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;