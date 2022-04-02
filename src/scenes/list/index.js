import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import QuestionList from './QuestionList';
import './style.css';

const Lists = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState([{ answer: '' }]);
  const [created, setCreated] = useState('');

  const getQuestions = () => {
    Axios.get('http://localhost:3001/question', {
      question: question,
      answer: answer,
      created: created
    }).then((response) => {
      console.log(response);

      setQuestion(response.data);
      setAnswer(response.data);
      setCreated(response.data);
    });
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      {question.length > 0 &&
        question.map((questions) => (
          <QuestionList key={questions.id} questions={questions} />
        ))}
    </div>
  );
};
export default Lists;
