import React from 'react';
import PropTypes from 'prop-types';
import UploadAvatar from './UploadAvatar';
import { commonPropTypes } from './common';

import './Form.scss';

const Form = props => {
  return (
    <div className="form">
      <h1 className="form__title">hCard Builder</h1>
      <form action="">
        <fieldset className="form__fieldset">
          <legend className="form__fieldset__legend">Personal details</legend>
          <div className="form__fieldset__fields">
            <div className="form__fieldset__fields__row">
              <Field
                id="givenName"
                value={props.givenName}
                label="Given name"
                onChange={props.onChange}
              />
              <Field
                id="surname"
                value={props.surname}
                label="Surname"
                onChange={props.onChange}
              />
            </div>
            <div className="form__fieldset__fields__row">
              <Field
                id="email"
                value={props.email}
                label="Email"
                onChange={props.onChange}
                type="email"
              />
              <Field
                id="phone"
                value={props.phone}
                label="Phone"
                onChange={props.onChange}
                type="tel"
              />
            </div>
          </div>
        </fieldset>
        <fieldset className="form__fieldset">
          <legend className="form__fieldset__legend">Address</legend>
          <div className="form__fieldset__fields">
            <div className="form__fieldset__fields__row">
              <Field
                id="houseName"
                value={props.houseName}
                label="House name or #"
                onChange={props.onChange}
              />
              <Field
                id="street"
                value={props.street}
                label="Street"
                onChange={props.onChange}
              />
            </div>
            <div className="form__fieldset__fields__row">
              <Field
                id="suburb"
                value={props.suburb}
                label="Suburb"
                onChange={props.onChange}
              />
              <Field
                id="state"
                value={props.state}
                label="State"
                onChange={props.onChange}
              />
            </div>
            <div className="form__fieldset__fields__row">
              <Field
                id="postCode"
                value={props.postCode}
                label="Postcode"
                onChange={props.onChange}
              />
              <Field
                id="country"
                value={props.country}
                label="Country"
                onChange={props.onChange}
              />
            </div>
          </div>
        </fieldset>
        <div className="form__buttons">
          <div className="form__buttons__btn">
            <UploadAvatar onChange={props.onChange} />
          </div>
          <div className="form__buttons__btn">
            <button type="submit" className="form__buttons__btn--submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

Form.propTyes = {
  ...commonPropTypes,
  onChange: PropTypes.func.isRequired,
}

const Field = ({ id, value, label, type, onChange }) => (
  <div className="field">
    <label htmlFor={id} className="field__label">
      {label}
    </label>
    <input
      className="field__input"
      type={type}
      value={value}
      id={id}
      onChange={e => onChange(id, e.target.value)}
    />
  </div>
);

Field.defaultProps = {
  type: 'text',
};

Field.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Form;
