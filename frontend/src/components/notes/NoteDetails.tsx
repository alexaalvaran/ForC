'use client'

import React, {useState, useEffect} from "react";
import { useParams } from "next/navigation";
import { Note,DefaultNote } from "./Note";
import Link from "next/link";

function NoteDetails(){
    const[note, setNote] = useState<Note>(DefaultNote);

    const id = useParams<{id:string}>().id;

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/notes/${id}`)
        .then((res) => {
            return res.json();
        })
        .then((json) =>{
            setNote(json);
        })
        .catch((err) => {
            console.log('error from note details' + err);
        });
    }, [id]);

    const NoteItem = (
        <div>
           <h1>{note.title}</h1>
           <h2>{note.note}</h2>
        </div>
    );

    return(
        <div className='NoteDetails  d-flex justify-content-center align-items-center min-vh-100'>
            <div className='container text-center'>
                <div className='row'>
                    <div className = 'col-md-10 m-auto'>
                        <div className = 'noteItem'>
                            {NoteItem}
                        </div>
                        <br/> <br/>
                        <Link  href='/notes' className='ourNotesbtn btn-outline-warning float-left'>
                        our notes
                        </Link>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default NoteDetails;