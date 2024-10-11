import{
    Controller,
    Get,
    Post,
    Param,
    HttpException,
    HttpStatus,
    Body,
} from "@nestjs/common";
import { error } from "console";
import { NoteService } from "./note.service";
import { NewNote } from "./newNote.dto";

@Controller('/api/notes')
export class NoteController{
    constructor(private readonly noteService: NoteService) {}

    @Get('/')
    async findAll() {
        try{
            return this.noteService.findAll();
        }catch{
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'No notes found',
                },
                HttpStatus.NOT_FOUND,
                {cause: error},
            );
        }
    }

    @Get('/:id')
    async findNote(@Param('id') id:string){
        try{
            return this.noteService.findOne(id);
        } catch{
            throw new HttpException(
                {
                    staus: HttpStatus.NOT_FOUND,
                    error: 'Note not found'
                },
                HttpStatus.NOT_FOUND,
                {cause: error},
            );
        }
    }

    @Post('/')
    async newNote(@Body() newNote:NewNote){
        try{
            await this.noteService.newNote(newNote);
            return { message: 'new note added'};
        } catch{
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'unable to add note',
                },
                HttpStatus.BAD_REQUEST,
                {cause: error}
            );
        }
    }
}