import React, { useState } from 'react';
import service from 'apis/config';
import './style.css';

function Forms() {
  const [name, setName] = useState('');
  const [visibilitySeconds, setVisibilitySeconds] = useState(30);
  const [options, setOptions] = useState([{ name: '' }]);

  const submitForm = (e) => {
    e.preventDefault();
    console.log({
      name,
      visibilitySeconds,
      options
    });
    service
      .post('/questions', {
        name,
        visibilitySeconds,
        options
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const handleChangeInput = (name, index) => {
    console.log(name, index);
    setOptions((options) => {
      console.log(options);
      options[index].name = name;
      return options;
    });
  };

  const handleAddInput = (e) => {
    e.preventDefault();
    setOptions([...options, { name: '' }]);
  };

  return (
    <div className='form-container'>
      <form className='question-answer-form'>
        {
          <div className='info-message'>
            This is a question form, where you will fill in your questions and
            answers
          </div>
        }
        <hr className='highliner' />
        <input
          name='name'
          className='form-field'
          type='text'
          placeholder='Ask a question..'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          name='visibilitySeconds'
          className='form-field'
          type='number'
          placeholder='Time to answer'
          onChange={(e) => {
            setVisibilitySeconds(e.target.value);
          }}
        />

        {options.map((option, index) => (
          <input
            key={index}
            name='options'
            className='form-field'
            type='text'
            placeholder='Answer'
            onChange={(e) => {
              handleChangeInput(e.target.value, index);
            }}
          />
        ))}

        <button className='btn-add' onClick={handleAddInput}>
          Add more answers
        </button>

        <button className='input-button' onClick={(e) => submitForm(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Forms;
