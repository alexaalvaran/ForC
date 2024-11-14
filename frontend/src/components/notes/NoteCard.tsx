import React from "react";
import { Note } from "./Note";
import { useRouter } from "next/navigation";

interface IProp{
    note?: Note;
}

const NoteCard = ({note}: IProp) => {
    const router = useRouter();

    if(note == undefined){
        return null;
    }

    const onClick =() => {
        //router.push(`/showNote/${note._id}`)
    };

    return(
        <div className='note-card text-center' onClick = {onClick}>
            <h1 className='note-title'>{note.title}</h1>
            <h2 className='note-content'>{note.note}</h2>
        </div>
    );
};

export default NoteCard;