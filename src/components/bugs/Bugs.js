import React, { useEffect } from 'react';
import BugItem from './BugItem';
import Preloader from '../layout/Preloader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBugs } from '../../actions/bugActions';

const Bugs = ({ bug: { bugs, loading }, getBugs }) => {
  useEffect(() => {
    getBugs();
    // eslint-disable-next-line
  }, []);

  if (loading || bugs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center lime-text text-darken-3'>Application issues</h4>
      </li>
      {!loading && bugs.length === 0 ? (
        <p className='center'>Awesome, there is no bug...</p>
      ) : (
        bugs.map(bug => <BugItem bug={bug} key={bug.id} />)
      )}
    </ul>
  );
};

Bugs.propTypes = {
  bug: PropTypes.object.isRequired,
  getBugs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  bug: state.bug
});

export default connect(mapStateToProps, { getBugs })(Bugs);
