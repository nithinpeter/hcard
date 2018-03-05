import React from 'react';
import { commonPropTypes } from './common';

import imgPlaceholder from './avatar-placeholder.png';
import './Preview.scss';

const Preview = props => {
  return (
    <div className="preview">
      <div className="preview__content">
        <div className="preview__content__title">hCard preview</div>
        <Card {...props} />
      </div>
    </div>
  );
};

Preview.protoTypes = commonPropTypes;

const Card = props => (
  <div className="card">
    <div className="card__header">
      <h2 className="card__header__text">
        {props.givenName} {props.surname}
      </h2>
      <img
        className="card__header__img"
        src={props.avatar ? props.avatar : imgPlaceholder}
        alt="avatar"
      />
    </div>
    <div className="card__body">
      <div className="card__body__field">
        <span className="card__body__field__label">Email</span>
        <span className="card__body__field__value">{props.email}</span>
      </div>
      <div className="card__body__field">
        <span className="card__body__field__label">Phone</span>
        <span className="card__body__field__value">{props.phone}</span>
      </div>

      <div className="card__body__field">
        <span className="card__body__field__label">Address</span>
        <span className="card__body__field__value">
          {props.houseName} {props.street}
        </span>
      </div>
      <div className="card__body__field">
        <span className="card__body__field__label" />
        <span className="card__body__field__value">
          {[props.suburb, props.state].filter(val => !!val).join(', ')}
        </span>
      </div>

      <div className="card__body__field--double">
        <div className="card__body__field">
          <span className="card__body__field__label">Postcode</span>
          <span className="card__body__field__value">{props.postCode}</span>
        </div>

        <div className="card__body__field">
          <span className="card__body__field__label">Country</span>
          <span className="card__body__field__value">{props.country}</span>
        </div>
      </div>
    </div>
  </div>
);

Card.propTyes = commonPropTypes;

export default Preview;
