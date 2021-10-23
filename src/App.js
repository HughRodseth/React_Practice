/*import label from './label.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <div class="box">
      <Main/>
      <Side/>
      </div>
      <Footer/>
    </div>
  );
}

function Nav() {
  return (
    <div className="nav">
      <h1>Nav</h1>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>header</h1>
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      <h1>Main</h1>
    </div>
  );
}

function Side() {
  return (
    <div className="side">
      <h1>Side</h1>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <h1>footer</h1>
    </div>
  );
} */

import React, { useState, useEffect } from 'react'
import Note from './components/note'
import noteService from './services/notes'
import Notification from './components/notifications'


const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2021</em>
    </div>
  )
}



const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [errorMessage, setErrorMessage] = useState('some error happened...')


  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])
  console.log('render', notes.length, 'notes')


  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() > 0.5,
    }

    
  
    
    noteService
      .create(noteObject)
        .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)
  
  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
      })
      .catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })  
}


  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>   
      <ul>
        {notesToShow.map((note, i) => 
          <Note
            key={i}
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>  
      <Footer />
    </div>
  )
}

export default App