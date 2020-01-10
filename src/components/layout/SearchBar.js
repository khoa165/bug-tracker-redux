import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchBugs } from '../../actions/bugActions';

const SearchBar = ({ searchBugs }) => {
  const text = useRef('');

  const onChange = e => {
    searchBugs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: '30px' }} className='lime darken-3'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search issues...'
              ref={text}
              onChange={onChange}
              required
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchBugs: PropTypes.func.isRequired
};

export default connect(null, { searchBugs })(SearchBar);
