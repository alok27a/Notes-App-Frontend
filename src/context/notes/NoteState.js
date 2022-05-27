import { useState } from "react"
import NoteContext from "./noteContext"

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // GET ALL NOTES
    const getNotes = async () => {
        // API CALL NEEDED HERE
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4YzkwZDI1MzA1OTcxYjJhNjg2YjAzIn0sImlhdCI6MTY1MzM3OTMwMH0.cB6wyiH8kDR7oTOrL6r6U-gaiDJjy7Mnu5Gr401qp3o'
            }
        });
        const json = await response.json();
        console.log(json)
        setNotes(json)
    }

    // ADD NOTE

    const addNote = async (title, description, tag) => {
        // API CALL NEEDED HERE
        const response = await fetch(`${host}/api/notes/addnote/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4YzkwZDI1MzA1OTcxYjJhNjg2YjAzIn0sImlhdCI6MTY1MzM3OTMwMH0.cB6wyiH8kDR7oTOrL6r6U-gaiDJjy7Mnu5Gr401qp3o'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json =await response.json();

        const note = json;
        setNotes(notes.concat(note))

    }
    // DELETE NOTE
    const deleteNote = async (id) => {
        // API CALL
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4YzkwZDI1MzA1OTcxYjJhNjg2YjAzIn0sImlhdCI6MTY1MzM3OTMwMH0.cB6wyiH8kDR7oTOrL6r6U-gaiDJjy7Mnu5Gr401qp3o'
            }
        });
        const json = response.json();

        console.log("Deleting note with id " + id)
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote)
    }

    // EDIT NOTE
    const editNote = async (id, title, description, tag) => {
        // API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4YzkwZDI1MzA1OTcxYjJhNjg2YjAzIn0sImlhdCI6MTY1MzM3OTMwMH0.cB6wyiH8kDR7oTOrL6r6U-gaiDJjy7Mnu5Gr401qp3o'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json)

        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes)
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;