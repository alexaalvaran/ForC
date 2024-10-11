import React, {ChangeEvent,FormEvent,useState} from "react";
import {useRouter} from "next/navigation";
import { Note, DefaultNote } from "./Note";

const NewNoteComponent= () => {
    const navigate = useRouter();

    const[note, setNote] = useState<Note>(DefaultNote);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNote({...note,[event.target.name]: event.target.value});
    };

    const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setNote({...note,[event.target.name]: event.target.value});
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/notes',
            {method: 'POST',
                headers:{"Content-Type":"application/json" },
                body: JSON.stringify(note),
            })
            .then((res) => {
                setNote(DefaultNote);
                navigate.push("/notes");
            })
            .catch((err) => {
                console.log('error from new note' + err);
            });
    };

    return(
        <div className="NewNote">

                        <h1 className="titleText">
                            add a new note
                        </h1>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <h3 className="inputNoteTitle"> title </h3>
                                <input
                                type="text"
                                placeholder="..."
                                name="title"
                                className="inputNoteBox form-control"
                                value={note.title}
                                onChange = {onChange}
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <h3 className="inputNoteTitle">note</h3>
                                <textarea
                                placeholder="..."
                                name="note"
                                className="inputNoteBox"
                                value={note.note}
                                onChange = {onChangeText}
                                rows={6}
                                />
                            </div>
                            <button
                            type="submit"
                            className= "submitNewNote"
                            >
                                add note :)
                            </button>
                        </form>
                    </div>
    )
}

export default NewNoteComponent;