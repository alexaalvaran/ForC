import React, {useState, useEffect} from "react";
import { Note } from "./Note";
import Link from "next/link";
import NoteCard from "./NoteCard";

function ShowNotes() {
    const[notes, setNotes] = useState<[Note?]>([]);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/notes`)
        .then((res) => {
            return res.json();
        })
        .then((notes) => {
            setNotes(notes);
        })
        .catch((err) => {
            console.log('error from show notes' + err);
        });
    }, []);

    const noteList =
      notes.length === 0
        ? 'there are no notes'
        : notes.map((note,k) => <NoteCard note={note} key={k}/>);

    return(
        <div className='ShowNotes text-center'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h2 className='showNotesTitle display-4 text-center'>
                        our notes
                    </h2>
                    </div>

                    <div className='col-md-11'>
                        <Link
                        href='/newNote'
                        className='newNotebtn btn-outline-warning float-right'
                        >
                            + write a note
                        </Link>
                        <br />
                    </div>
                </div>
                <div className='notes'>
                    {noteList}
                </div>
            </div>
        </div>
    );
}

export default ShowNotes;