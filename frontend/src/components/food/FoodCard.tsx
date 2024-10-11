import React from "react";
import { useRouter } from "next/navigation";
import { Food } from "./Food";

interface IProp {
    food?: Food;
}

const FoodCard = ({food}: IProp) => {
    const router = useRouter();

    if(food == undefined){
        return null;
    }

    const onClick = () => {
        router.push(`/showFood/${food._id}`)
    };

    return(
        <div className='food-card text-center' onClick = {onClick}>
            <h1 className='food-card-title'>{food.place}</h1>
            <h2 className='food-content'>{food.location}</h2>
            <h3 className='food-content'>{food.cuisine}</h3>
            <h4 className='food-content'>{food.rating}</h4>
            <h4 className='food-content'>{food.review}</h4>
        </div>
    );
};

export default FoodCard;