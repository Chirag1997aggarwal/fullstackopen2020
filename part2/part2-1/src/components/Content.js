import React from 'react';

const Part = ({name, excercise}) => <p>{name} &nbsp; {excercise}</p>

const Content = ({parts}) => {
  const exercises = parts.map((part) => part.exercises)
  const total = exercises.reduce((s, p) => s+p)
  return(
    <>
      {parts.map( (part) => 
        <Part key={part.id}
          name = {part.name} 
          excercise = {part.exercises}
        />
      )}
      <h4>
        Total of {total} exercises
      </h4>
    </>
  )
}

export default Content