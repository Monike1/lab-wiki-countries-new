import React from 'react';

const Container = (props) => {
  return (
    <div class="container">
      <div class="row">
        {props.children}
      </div>
    </div>
  )  
}

export default Container;