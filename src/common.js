import PropTypes from 'prop-types';

export const commonPropTypes = {
  givenName: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  houseName: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  suburb: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postCode: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

