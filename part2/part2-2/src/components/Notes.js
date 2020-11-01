import React, {useState} from 'react';
import logo from '../logo.svg';
import '../App.css';


const Notes = ({preNotes}) => {
	const [notes, setNotes] = useState(preNotes)
	const [newNote, setNewNote] = useState('... add new note')
	const [addNoteDisable, setAddNoteDisable] = useState(true)
	const [showAll, setShowAll] = useState(true)

	const addNote = (e) => {
		e.preventDefault();
		if (e.target.elements[0].value != '') { 
			const noteContent = notes.map((note) => note.content)
			if (noteContent.indexOf(e.target.elements[0].value) === -1){
				const newNoteObj = {
			      content: e.target.elements[0].value,
			      date: new Date().toISOString(),
			      important: Math.random() < 0.5,
			      id: notes.length + 1,
			    }
				setNotes(notes.concat(newNoteObj))
				e.target.elements[0].value = ''
			}
			else {
				alert('Note already vailable.\nKindly, add another note.');
			}
		}
		else {
			alert('Kindly Provide a appropriate value as note for adding that.')
		}
	}

	const handleChange = (e) => {
		const noteContent = notes.map((note) => note.content)
    	if (noteContent.indexOf(e.target.value) != -1){
    		alert('Note already vailable.\nKindly, add another note.')
    	}
    	if (e.target.value.length > 0){
    		setAddNoteDisable(false);
    	}
    	else{
    		setAddNoteDisable(true);
    	}
	}

  return (
    <div className="App">
      <header className="App-header">
      	<form onSubmit={addNote}>
	        <div className="input-group mb-3">
			    <input
			     type="text"
			     className="form-control" 
			     placeholder={newNote}
			     onChange={handleChange}
			    />
			    <div className="input-group-append">
			      <button 
			       className='btn btn-primary' 
			       type="submit" 
			       disabled={addNoteDisable}
			      >
			      	save
		      	  </button>
			    </div>
		    </div>
	    </form>
	    <button className='btn btn-primary' onClick={() => setShowAll(!showAll)}>Show {!showAll ? 'all' : 'important'}</button>
        <img src={logo} className="App-logo" alt="logo" />
        <table>
        	<tbody>
		        {notes.map((note) => 

		        	<tr key={note.id}>
		        		<td className="badge badge-primary">{note.content}</td>
		        	</tr>
		    	)}
	    	</tbody>
    	</table>
      </header>
    </div>
  );
}

export default Notes