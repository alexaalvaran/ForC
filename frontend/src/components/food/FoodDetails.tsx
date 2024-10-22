'use client'

import React, {useState, useEffect} from "react";
import { useParams, useRouter } from "next/navigation";
import { Food, DefaultFood} from './Food';
import Link from "next/link";

function FoodDetails() {
    const[food, setFood] = useState<Food>(DefaultFood);

    const id = useParams<{id:string}>().id;
    const navigate = useRouter();

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/food/${id}`)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            setFood(json);
        })
        .catch((err) => {
            console.log('error from food details' + err);
        });
    }, [id]);

    const onDeleteClick = (id:string) => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/food/${id}`, {method:'DELETE'})
        .then((res) => {
            navigate.push('/food');
        })
        .catch((err) => {
            console.log('error from show food details delete click' + err);
        });
    };

    const FoodItem = (
        <div>
            <table className='foodTable table-hove table-dark-table-striped table-bordered'>
                <tbody>
                    <tr>
                        <td>place</td>
                        <td>{food.place}</td>
                    </tr>
                    <tr>
                        <td>cuisine</td>
                        <td>{food.cuisine}</td>
                    </tr>
                    <tr>
                        <td>location</td>
                        <td>{food.location}</td>
                    </tr>
                    <tr>
                        <td>rating</td>
                        <td>{food.rating}</td>
                    </tr>
                    <tr>
                        <td>review</td>
                        <td>{food.review}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    return(
        <div className='FoodDetails'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10 m-auto'>
                        <div className = 'foodItem'>
                            {FoodItem}
                        </div>
                        <br /><br />
                        <Link href='/food' className='ourFoodbtn btn-outline-warning float-right'>
                        our food places
                        </Link>
                    </div>
                    <div className='col-md-6 m-auto'>
                        <button
                        type='button'
                        className='deleteFoodbtn btn-outline-danger btn-lg btn-block'
                        onClick={() => {
                            onDeleteClick(food._id || "");
                        }}
                        >
                            delete place
                        </button>
                    </div>
                    <div className='col-md-6 m-auto'>
                        <Link
                        href={'/editFood/${food._id}'}
                        className='editFoodbtn btn-outline-info btn-lg btn-block'
                        >
                            edit food
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FoodDetails;