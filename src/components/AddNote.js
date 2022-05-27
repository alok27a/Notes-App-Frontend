import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

function AddNote() {
    const context = useContext(noteContext);
    const { addNote } = context
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({title: "", description: "" ,tag:""})
    }
    //  For dynamically updating the text what user has written 
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='container my-3'>
                <h3>Add your Notes</h3>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Title</label>
                        <input type="text" className="form-control" id="title" aria-describedby="emailHelp" name="title" onChange={onChange} value={note.title} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" onChange={onChange} value={note.description} minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="tag">Tag</label>
                        <input type="text" className="form-control" value={note.tag} id="tag" name="tag" onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>

        </>
    )
}

export default AddNote