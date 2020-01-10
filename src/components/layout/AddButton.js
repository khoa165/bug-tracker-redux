import React from 'react';

const AddButton = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-bug-modal'
        className='btn-floating btn-large lime darken-3 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a
            href='#dev-list-modal'
            className='btn-floating green modal-trigger'
          >
            <i className='material-icons'>person</i>
          </a>
        </li>
        <li>
          <a href='#add-dev-modal' className='btn-floating red modal-trigger'>
            <i className='material-icons'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddButton;
