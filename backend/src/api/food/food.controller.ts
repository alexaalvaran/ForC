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
import { FoodService } from "./food.service";
import { NewFood } from "./newFood.dto";

@Controller('/api/food')
export class FoodController{
    constructor(private readonly foodService: FoodService) {}

    @Get('/')
    async findAll() {
        try{
            return this.foodService.findAll();
        } catch {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'No food places found',
                },
                HttpStatus.NOT_FOUND,
                {cause: error},
            );
        }
    }

    @Get('/:id')
    async findFood(@Param('id') id:string){
        try{
            return this.foodService.findOne(id);
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
    async newFood(@Body() newFood: NewFood){
        try{
            await this.foodService.newFood(newFood);
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
    async updateFood(
        @Param('id') id:string,
        @Body() newFood: NewFood){
        try{
            await this.foodService.updateFood(id, newFood);
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
    async deleteFood(@Param('id') id:string){
        try{
            await this.foodService.deleteFood(id);
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