import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Flashcards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: 'What language is React based on?',
    answer: 'JavaScript',
  },
  {
    id: 7336,
    question: 'What are the building blocks of React apps?',
    answer: 'Components',
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: 'JSX',
  },
  {
    id: 1297,
    question: 'How to pass data from parent to child components?',
    answer: 'Props',
  },
  {
    id: 9103,
    question: 'How to give components memory?',
    answer: 'useState hook',
  },
  {
    id: 2003,
    question:
      'What do we call an input element that is completely synchronised with state?',
    answer: 'Controlled element',
  },
];

function Flashcards() {
  const [active, setActive] = useState(null);

  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          key={q.id}
          className={active === q.id ? 'selected' : ''}
          onClick={() => {
            setActive(q.id !== active ? q.id : null);
          }}
        >
          <p>{active === q.id ? q.answer : q.question}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
