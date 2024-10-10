import React, {ChangeEvent,FormEvent,useState} from "react";
import {useRouter} from "next/navigation";
import { Note, DefaultNote } from "./Note";

const NewNoteComponent= () => {
    const navigate = useRouter();

    const[note, setNote] = useState<Note>(DefaultNote);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNote({...note,[event.target.name]: event.target.value});
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        fetch(process.env.backendURL + `/api/notes`,
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
            <div className="container">
                <div className="row">
                    <div className="flex-col m-auto">
                        <h1 className="titleText display-4 text-center">
                            add a new note
                        </h1>
                        <form noValidate onSubmit={onSubmit}>
                            <div className="form-group">
                                <h3> title </h3>
                                <input
                                type="text"
                                placeholder="..."
                                name="title"
                                className="form-control"
                                value={note.title}
                                onChange = {onChange}
                                />
                            </div>
                            <br />
                            <div className="form-group">
                                <h3>note</h3>
                                <input
                                type="text"
                                placeholder="..."
                                name="note"
                                className="form-control"
                                value={note.note}
                                onChange = {onChange}
                                />
                            </div>
                            <button
                            type="submit"
                            className= "btn btn-outline-warning btn-block mt-4 mb-4 w-100 items-center"
                            >
                                add note :)
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewNoteComponent;