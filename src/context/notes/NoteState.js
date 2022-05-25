import NoteContext from "./noteContext"

const NoteState = (props) => {
    const state = {
        "name": "alok",
        "class": "5b"
    }
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

