import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteBug, setCurrent } from '../../actions/bugActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const BugItem = ({ bug, deleteBug, setCurrent }) => {
  const { id, dev, fixed, message, date } = bug;

  const onDelete = () => {
    deleteBug(id);
    M.toast({
      html: 'Issue successfully removed!'
    });
  };

  return (
    <li className='collection-item'>
      <a
        href='#edit-bug-modal'
        className={`modal-trigger ${fixed ? 'blue-text' : 'red-text'}`}
        onClick={() => setCurrent(bug)}
      >
        {message}
      </a>
      <br />
      <span className='lime-text text-darken-3'>
        <span className='black-text'>#{id}</span> last updated by{' '}
        <span className='black-text'>{dev}</span> on{' '}
        <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
      </span>
      <a href='#!' className='secondary-content' onClick={onDelete}>
        <i className='material-icons lime-text text-darken-3'>delete</i>
      </a>
    </li>
  );
};

BugItem.protypes = {
  bug: PropTypes.object.isRequired,
  deleteBug: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteBug, setCurrent })(BugItem);
