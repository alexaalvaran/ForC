import { HydratedDocument } from 'mongoose';
export type NoteDocument = HydratedDocument<Note>;
export declare class Note {
    title: string;
    note: string;
}
export declare const NoteSchema: import("mongoose").Schema<Note, import("mongoose").Model<Note, any, any, any, import("mongoose").Document<unknown, any, Note> & Note & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Note, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Note>> & import("mongoose").FlatRecord<Note> & {
    _id: import("mongoose").Types.ObjectId;
}>;
