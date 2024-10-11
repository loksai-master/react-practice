import {useState} from 'react';
const About = ({name=''}) => {
	const [count, setCount]= useState(0);
  return (
    <>
      <h2>count: {count}</h2>
      <button
        onClick={() => {setCount(count + 1) }}
      >
        counter
      </button>
      <h1>This is a class component written by {name}</h1>
    </>
  );
};
export default About;