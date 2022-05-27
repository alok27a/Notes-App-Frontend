import React, { useContext, useState, useEffect, useRef } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context
    useEffect(() => {
        getNotes();
    }, [])

    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    let ref = useRef(null)
    let refClose = useRef(null)


    const { addNote } = context

    const handleClick = (e) => {
        e.preventDefault()
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
    }
    //  For dynamically updating the text what user has written 
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit your Notes</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='container my-3'>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Title</label>
                                        <input type="text" className="form-control" id="title" aria-describedby="emailHelp" name="etitle" onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="desc" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="edescription" name="description" onChange={onChange} minLength={5} required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="tag">Tag</label>
                                        <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} minLength={5} required/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h3>Your Added Notes</h3>
                <div className="container mx-2">
                    {notes.length === 0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <NoteItem key={notes._id} updateNote={updateNote} note={note} />;
                })}
            </div>
        </>
    )
}

export default Notes