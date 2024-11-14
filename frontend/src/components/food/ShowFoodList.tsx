import React, {useState, useEffect} from "react";
import Link from "next/link";
import { Food } from "./Food";
import FoodCard from "./FoodCard";

function ShowFoodList() {
    const[food, setFood] = useState<Food[]>([]);
    const[searchQuery, setSearchQuery] = useState("");
    const[filteredFood, setFilteredFood] = useState<Food[]>([]);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/food`)
        .then((res) => {
            return res.json();
        })
        .then((food) => {
            setFood(food);
            setFilteredFood(food);
        })
        .catch((err) => {
            console.log('error from show food' + err);
        });
    }, []);

    useEffect(() => {
       const filtered = food.filter((food) => {
        const lowerCaseQuery = searchQuery.toLowerCase();

        return(
            food.place.toLowerCase().includes(lowerCaseQuery) ||
            food.cuisine.toLowerCase().includes(lowerCaseQuery) ||
            food.location.toLowerCase().includes(lowerCaseQuery) ||
            food.rating.includes(lowerCaseQuery)
        );
       });
       setFilteredFood(filtered);
    }, [searchQuery, food])

    const foodList =
      food.length === 0
        ? 'there are no food places'
        : filteredFood.map((food, k) => <FoodCard food={food} key={k}/>);

        return(
            <div className="ShowFood text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h2 className="showFoodTitle">
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
                            <br /> <br />
                        </div>
                        <div className='col-md-11'>
                        <input
                            type='text'
                            className='searchBar form-control'
                            placeholder='search for a place, location, cuisine or rating'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            />
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