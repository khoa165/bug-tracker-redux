import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDevs } from '../../actions/devActions';

const DevSelectOptions = ({ getDevs, dev: { devs, loading } }) => {
  useEffect(() => {
    getDevs();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    devs !== null &&
    devs.map(dev => (
      <option key={dev.id} value={`${dev.firstName} ${dev.lastName}`}>
        {dev.firstName} {dev.lastName}
      </option>
    ))
  );
};

DevSelectOptions.propTypes = {
  dev: PropTypes.object.isRequired,
  getDevs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  dev: state.dev
});

export default connect(mapStateToProps, { getDevs })(DevSelectOptions);
