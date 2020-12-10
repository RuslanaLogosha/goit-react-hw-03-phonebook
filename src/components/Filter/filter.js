import React from 'react';
import PropTypes from 'prop-types';
import './filter.scss';


const Filter = ({ value, onChange }) => (
  <label className="filterLabel">
    Find contacts by name
    <input className= "filterInput" type='text' value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter;