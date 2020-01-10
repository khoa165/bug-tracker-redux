import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteDev } from '../../actions/devActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const DevItem = ({ dev: { id, firstName, lastName }, deleteDev }) => {
  const onDelete = () => {
    deleteDev(id);
    M.toast({
      html: `Awww, ${firstName} ${lastName} is no longer a part of your team!`
    });
  };

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons lime-text text-darken-3'>delete</i>
        </a>
      </div>
    </li>
  );
};

DevItem.propTypes = {
  dev: PropTypes.object.isRequired,
  deleteDev: PropTypes.func.isRequired
};

export default connect(null, { deleteDev })(DevItem);
