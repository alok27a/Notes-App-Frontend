import { useState } from "react"
import NoteContext from "./noteContext"

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "628f8d1e357ce320bbb0358f",
            "user": "628c90d25305971b2a686b03",
            "title": "Test",
            "description": "Test desc",
            "tag": "Test tag",
            "date": "2022-05-26T14:22:22.413Z",
            "__v": 0
        },
        {
            "_id": "628f8e5f357ce320bbb03592",
            "user": "628c90d25305971b2a686b03",
            "title": "Test2",
            "description": "Test desc2",
            "tag": "Test tag2",
            "date": "2022-05-26T14:27:43.396Z",
            "__v": 0
        }
    ]

    const [notes,setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;