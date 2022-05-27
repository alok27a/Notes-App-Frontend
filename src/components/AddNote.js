import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

function AddNote() {
    const context = useContext(noteContext);
    const { addNote } = context
    const [note, setNote] = useState({ title: "", description: "" })
    const handleClick = (e) => {
        e.preventDefault()
        addNote(note.title,note.description,note.tag)
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
                    <div class="mb-3">
                        <label htmlFor="exampleInputEmail1" class="form-label">Enter Title</label>
                        <input type="text" class="form-control" id="title" aria-describedby="emailHelp" name="title" onChange={onChange} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="desc" class="form-label">Description</label>
                        <input type="text" class="form-control" id="description" name="description" onChange={onChange} />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={handleClick}>Add Note</button>
                </form>
            </div>

        </>
    )
}

export default AddNote