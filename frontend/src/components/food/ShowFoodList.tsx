import React, {useState, useEffect} from "react";
import Link from "next/link";
import { Food } from "./Food";
import FoodCard from "./FoodCard";

function ShowFoodList() {
    const[food, setFood] = useState<[Food?]>([]);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/food`)
        .then((res) => {
            return res.json();
        })
        .then((food) => {
            setFood(food);
        })
        .catch((err) => {
            console.log('error from show food' + err);
        });
    }, []);

    const foodList =
      food.length === 0
        ? 'there are no food places'
        : food.map((food, k) => <FoodCard food={food} key={k}/>);

        return(
            <div className="ShowFood text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="showFoodbtn btn-outline">
                                food places :)!
                            </h2>
                        </div>

                        <div className='col-md-11'>
                            <Link
                            href='/newFood'
                            className='newFoodbtn btn-outline-warning float-right'
                            >
                                + add a new place
                            </Link>
                            <br />
                        </div>
                    </div>
                    <div className='food'>
                        {foodList}
                    </div>
                </div>
            </div>
        );
}

export default ShowFoodList;