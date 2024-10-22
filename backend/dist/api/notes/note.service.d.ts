import { Note } from './note.schema';
import { Model } from 'mongoose';
import { NewNote } from './newNote.dto';
export declare class NoteService {
    private noteModel;
    constructor(noteModel: Model<Note>);
    findAll(): Promise<Note[]>;
    findOne(id: string): Promise<Note>;
    newNote(newNote: NewNote): Promise<import("mongoose").Document<unknown, {}, Note> & Note & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
