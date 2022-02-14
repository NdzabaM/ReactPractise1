import React from 'react';



    const Members = (props) => {
        const {firstName, role, secondName, offspring} = props;
    return (
      <div>
            <h4>This is: {firstName}, the {role} of {secondName}. Their Offspring is {offspring}.</h4>
      </div>
    )};

export default Members;