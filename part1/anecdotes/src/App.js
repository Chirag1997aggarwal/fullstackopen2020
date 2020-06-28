import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Anecdotes = ({index, point}) => {
	const anecdotes = [
	  'If it hurts, do it more often',
	  'Adding manpower to a late software project makes it later!',
	  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	  'Premature optimization is the root of all evil.',
	  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
	]
	return(
		<>
			<p
			  className='container'
			>
				{anecdotes[index]}
				<br />
				Has {point[index]} votes
			</p>

		</>
	)
}

const Button = ({handclick, text}) => {	
	return(
		<button type="button" className="btn btn-primary" onClick={handclick}>
        	{text}
        </button>
	)
}

function App() {
	const [anecdote, setanecdote] = useState(5)
	const [point, setpoint] = useState([0, 0, 0, 0, 1, 2])
	const copy = [...point]
	const increaseVote = (anecdote, copy) => {
		copy[anecdote] += 1
		return(
			setpoint(copy)
		)
	}

  return (
    <div className="App">
      <header className="App-header">
      	<h1>
        	Anecdote of the day !!
    	</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Anecdotes index={anecdote} point={point}/>
        <div className='btn-group container'>
	        <Button handclick={() => setanecdote(Math.floor((Math.random() * 5) + 1))} text='Next Anecdote' />
	        <Button handclick={() => increaseVote(anecdote, copy)} text='Vote' />
	    </div>
      </header>
      <section className="App-header">
      	<h1>
        	Anecdote with most votes !!
    	</h1>
    	<Anecdotes index={point.indexOf(Math.max(...point))} point={point}/>
      </section>
    </div>
  );
}

export default App;
