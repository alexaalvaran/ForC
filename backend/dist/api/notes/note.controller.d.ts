import { NoteService } from "./note.service";
import { NewNote } from "./newNote.dto";
export declare class NoteController {
    private readonly noteService;
    constructor(noteService: NoteService);
    findAll(): Promise<import("./note.schema").Note[]>;
    findNote(id: string): Promise<void>;
    newNote(newNote: NewNote): Promise<{
        message: string;
    }>;
}
