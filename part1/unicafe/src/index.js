import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const Header = ({title}) =>{
	return(
		<>
			<h1>
				{title}
			</h1>
		</>
	)
}

const Button = ({text, handclick}) =>{
	return(
		<>
			<button 
			 onClick = {handclick}
			>
				{text}
			</button>
		</>
	)
}

const Stats = (props) =>{
	const {good, neutral, bad} = props
	const total = good + neutral + bad
	const average = (good - bad)/total
	const positive = (good/total)*100
	if (total == 0) {
		return(
			<p>
				No feedback given
			</p>
		)
	}
	return(
		<>
			<table>
			<tbody>
				<tr><td>Good</td><td>{good}</td></tr>
				<tr><td>Neutral</td><td>{neutral}</td></tr>
				<tr><td>Bad</td><td>{bad}</td></tr>
				<tr><td>total</td><td>{total}</td></tr>
				<tr><td>Averge</td><td>{average}</td></tr>
				<tr><td>Positive</td><td>{positive} %</td></tr>
			</tbody>
			</table>
		</>
	)
}

const App = () =>{
	const title1 = 'Give Feedback'
	const title2 = 'Statistics'
	const [good, setgood] = useState(0)
	const [neutral, setneutral] = useState(0)
	const [bad, setbad] = useState(0)
	const total = good + neutral + bad
	const average = ((good * 1) + (neutral * 0) + (bad * -1))/3
	return(
		<>
			<Header title={title1} />
			<br />
			<Button text='Good' handclick = {() => setgood( good + 1 )} />
			<Button text='neutral' handclick = {() => setneutral( neutral + 1 )} />
			<Button text='Bad' handclick = {() => setbad( bad + 1 )} />
			<br />
			<Header title={title2} />
			<Stats good={good} neutral={neutral} bad={bad} />
		</>
	)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
