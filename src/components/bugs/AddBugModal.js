import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBug } from '../../actions/bugActions';
import DevSelectOptions from '../devs/DevSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddBugModal = ({ addBug }) => {
  const [message, setMessage] = useState('');
  const [fixed, setFixed] = useState(false);
  const [dev, setDev] = useState('');

  const onSubmit = () => {
    if (message === '' || dev === '') {
      M.toast({
        html: 'An issue requires message and an associated developer!'
      });
    } else {
      const newBug = {
        message,
        fixed,
        dev,
        date: new Date()
      };

      addBug(newBug);

      M.toast({
        html: `New issue reported by ${dev} at ${newBug.date}!`
      });

      // Clear fields.
      setMessage('');
      setDev('');
      setFixed(false);
    }
  };

  return (
    <div id='add-bug-modal' className='modal' style={modalStyle}>
      <div className='container'>
        <div className='modal-content'>
          <h4 className='lime-text text-darken-3'>Record issue</h4>
          <div className='row'>
            <div className='input-field'>
              <input
                type='text'
                name='message'
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
              <label htmlFor='message' className='active'>
                Bug message
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field'>
              <select
                name='dev'
                value={dev}
                className='browser-default'
                onChange={e => setDev(e.target.value)}
              >
                <option value='' disabled>
                  Select developer
                </option>
                <DevSelectOptions />
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='input-field'>
              <p>
                <label>
                  <input
                    type='checkbox'
                    className='filled-in'
                    checked={fixed}
                    value={fixed}
                    onChange={e => setFixed(!fixed)}
                  />
                  <span>Resolved?</span>
                </label>
              </p>
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

AddBugModal.propTypes = {
  addBug: PropTypes.func.isRequired
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default connect(null, { addBug })(AddBugModal);
