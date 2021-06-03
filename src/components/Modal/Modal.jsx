import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className='modal-overlay'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='modal-container'
            >
                <div className='upper-section'>
                    <h1>Huge Annoucement!</h1>
                    <p onClick={closeModal} className='close'>
                        &times;
                    </p>
                </div>
                <div className='middle-section'>
                    <h3>React Mega Tutorial is LIVE!</h3>
                    <p>Do you wish to learn React?</p>
                    <p>
                        I've published a completely FREE react tutorial, check
                        it out today!
                    </p>
                    <p>
                        I bring to you this mega course where each month I will
                        help you learn about these libraries and frameworks by
                        building 1 cool project.
                    </p>
                </div>
                <div className='lower-section'>
                    <a onClick={closeModal} className='modal-btn btn-red'>
                        Close
                    </a>
                    <a
                        href='http://theleanprogrammer.com/aam/'
                        target='_blank'
                        rel='noreferrer'
                        className='modal-btn btn-green'
                    >
                        Start tutorial
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;
