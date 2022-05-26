import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes, addNotes } = context
    return (
        <>
            <div className="row my-3">
                <h3>Your Added Notes</h3>
                {notes.map((notes) => {
                    return <NoteItem key={notes._id} note={notes} />;
                })}
            </div>
        </>
    )
}

export default Notes