import{
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    HttpException,
    HttpStatus,
    Body,
} from "@nestjs/common";
import { error } from "console";
import { DatesService } from "./dates.service";
import { NewDate } from "./newDate.dto";

@Controller('/api/dates')
export class DatesController{
    constructor(private readonly datesService:DatesService) {}

    @Get('/')
    async findAll() {
        try{
            return this.datesService.findAll();
        } catch{
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'No dates found',
                },
                HttpStatus.NOT_FOUND,
                {cause: error},
            );
        }
    }

    @Get('/:id')
    async findDate(@Param('id') id:string){
        try{
            return this.datesService.findOne(id);
        } catch{
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'food place not found',
                },
                HttpStatus.NOT_FOUND,
                {cause: error},
            );
        }
    }

    @Post('/')
    async newDate(@Body() newDate: NewDate){
        try{
            await this.datesService.newDate(newDate);
        } catch{
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    error: 'unable to add this place',
                },
                HttpStatus.BAD_REQUEST,
                {cause: error},
            );
        }
    }

    @Put('/:id')
    async updateDate(
        @Param('id') id:string,
        @Body() newDate: NewDate){
            try{
                await this.datesService.updateDate(id, newDate);
            } catch{
                throw new HttpException (
                    {
                        status:HttpStatus.BAD_REQUEST,
                        error: 'unable to update this place',
                    },
                    HttpStatus.BAD_REQUEST,
                    {cause: error},
                );
            }
        }

    @Delete('/:id')
    async deleteDate(@Param('id') id:string){
        try{
            await this.datesService.deleteDate(id);
        } catch {
            throw new HttpException(
              {
                status: HttpStatus.NOT_FOUND,
                error: 'place not found',
              },
              HttpStatus.NOT_FOUND,
              {cause: error},
            );
        }
    }
}