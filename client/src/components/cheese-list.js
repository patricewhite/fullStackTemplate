import React from 'react';
import {connect} from 'react-redux';

export function CheeseList(props){
  const cheeses = props.cheeses.map(cheese, index) => {
    <li key={index}>
          {chesse}
    </li>
  });

  return (
    <ul id='cheese-list'>
      {cheeses}
    </ul>
  );
};

const mapStateToProps = state => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);
