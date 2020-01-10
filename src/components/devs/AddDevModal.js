import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDev } from '../../actions/devActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddDevModal = ({ addDev }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({
        html: 'Pleas enter full name of developer!'
      });
    } else {
      addDev({ firstName, lastName });
      M.toast({
        html: `${firstName} ${lastName} successfully added to your team!`
      });

      // Clear fields.
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-dev-modal' className='modal' style={modalStyle}>
      <div className='container'>
        <div className='modal-content'>
          <h4 className='lime-text text-darken-3'>Add developer</h4>
          <div className='row'>
            <div className='input-field'>
              <input
                type='text'
                name='firstName'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <label htmlFor='firstName' className='active'>
                First name
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field'>
              <input
                type='text'
                name='lastName'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <label htmlFor='lastName' className='active'>
                Last name
              </label>
            </div>
          </div>
          <div className='row right'>
            <a
              href='#!'
              onClick={onSubmit}
              className='modal-close waves-effect lime darken-3 btn'
            >
              Enter
              <i className='material-icons right'>send</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

AddDevModal.propTypes = {
  addDev: PropTypes.func.isRequired
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default connect(null, { addDev })(AddDevModal);
