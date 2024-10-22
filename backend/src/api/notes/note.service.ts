import { Injectable } from '@nestjs/common';
import { Note } from './note.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NewNote } from './newNote.dto';

@Injectable()
export class NoteService {
    constructor(@InjectModel(Note.name)private noteModel: Model<Note>) {}

    async findAll(): Promise<Note[]>{
        return this.noteModel.find().exec();
    }

    async findOne(id: string): Promise<Note>{
        return await this.noteModel.findById(id).exec();
    }

    async newNote(newNote: NewNote)
    {
        return this.noteModel.create(newNote);
    }
}