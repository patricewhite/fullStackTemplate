import React from 'react';
//import {connect} from 'react-redux';


export default function CheeseList(props){
  let cheeses = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
]
   const data = cheeses.map( (cheese, index) => (

  
 
    <li key={index}>
          {cheese}
    </li>
   ))
   ;

  return (
    <ul id='cheese-list'>
      {data}
    </ul>
  );
};

// const mapStateToProps = state => ({
//   cheeses: state.cheeses
// });

// export default connect(mapStateToProps)(CheeseList);
