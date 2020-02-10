import React, { useState, useEffect } from 'react';
import _ from 'underscore';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Number = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  background-color: ${ props => {
    const n = parseInt( props.children, 10); // props.children는 text를 의미
    if (n<=10) {
      return 'yellow';  
    } else if(n<=20) {
      return 'blue';  
    } else if(n<=30) {
      return 'red';  
    } else if(n<=40) {
      return 'green';
    } else {
      return 'black';  
    }
  }};
  color: ${ props => {
    const n = parseInt( props.children, 10); // props.children는 text를 의미
    if (n<=40) {
      return 'black'; 
    } else {
      return 'white';  
    }
  }};
`;

function generate(){
  let numbers = [];
  _.times(45, n=> numbers.push(n+1));
  numbers = _.shuffle(numbers);
  numbers.length = 6;
  return numbers;
}

const Lotto = () => {
  const [ list, setList ] = useState([]);
  const regenerate = () => {
    setList(generate());
  }

  useEffect(() => {
    regenerate();
  }, []);

  return (
    <>
      <Row key={Math.random()}>
        {list.map(el => <Number key={el}>{el}</Number>)}
      </Row>
      <div>
        <button onClick={() => regenerate()}>재생성</button>
      </div>
    </>
  );
};

export default Lotto;