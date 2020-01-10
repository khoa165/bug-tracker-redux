import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateBug } from '../../actions/bugActions';
import DevSelectOptions from '../devs/DevSelectOptions';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditBugModal = ({ current, updateBug }) => {
  const [message, setMessage] = useState('');
  const [fixed, setFixed] = useState(false);
  const [dev, setDev] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setDev(current.dev);
      setFixed(current.fixed);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || dev === '') {
      M.toast({
        html: 'An issue requires message and an associated developer!'
      });
    } else {
      const editedBug = {
        id: current.id,
        message,
        fixed,
        dev,
        date: new Date()
      };

      updateBug(editedBug);
      M.toast({
        html: `Issue successfully updated by ${dev} at ${editedBug.date}!`
      });

      // Clear fields.
      setMessage('');
      setDev('');
      setFixed(false);
    }
  };

  return (
    <div id='edit-bug-modal' className='modal' style={modalStyle}>
      <div className='container'>
        <div className='modal-content'>
          <h4 className='lime-text text-darken-3'>Edit issue</h4>
          <div className='row'>
            <div className='input-field'>
              <input
                type='text'
                name='message'
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
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
              Update
              <i className='material-icons right'>send</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

EditBugModal.propTypes = {
  current: PropTypes.object,
  updateBug: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.bug.current
});

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default connect(mapStateToProps, { updateBug })(EditBugModal);
