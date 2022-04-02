import React from 'react';
import moment from 'moment';
import './style.css';

function QuestionList({ questions }) {
  return (
    <div className='list-wrapper'>
      <ul>
        <li>{questions.name}</li>
        <hr />
        <li>{questions.options}</li>
        <hr />
        <li>{moment(questions.created).format('DD/MM/YYYY')}</li>
        <hr />
      </ul>
    </div>
  );
}

export default QuestionList;
