import React, {useState, useEffect, ChangeEvent, FormEvent, ChangeEventHandler} from "react";
import { useParams, useRouter } from "next/navigation";
import {Food, DefaultFood} from './Food';
import Link from "next/link";

function UpdateFoodInfo() {
    const[food, setFood] = useState<Food>(DefaultFood);
    const id = useParams<{id:string}>().id;
    const router = useRouter();

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/food/${id}`)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            setFood(json);
        })
        .catch((err) => {
            console.log('error from update food' +err); 
        });
    },[id]);

    const inputOnChange = (event:ChangeEvent<HTMLInputElement>) => {
        setFood({...food,[event.target.name]: event.target.value});
    };

    const textAreaOnChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        setFood({...food,[event.target.name]: event.target.value});
    }

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/food/${id}`,
            {
                method:'PUT',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(food)
            }
        ).then((res) => {
            router.push(`/showFood/${id}`);
        })
        .catch((err) => {
            console.log('error from update food' + err);
        });
    };

return(
    <div className='UpdateFood'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 m-auto'>
                    <br />
                    <Link href='/food' className='ourFoodbtn btn-outline-warning float-right'>
                    our food places
                    </Link>
                </div>
                <br/><br /> <br/>
                <div className='col-md-8 m-auto'>
                    <form noValidate onSubmit={onSubmit}>
                        <div className='form-group'>
                            <label className='inputFood' htmlFor='place'>place</label>
                            <br/>
                            <input
                            type='text'
                            placeholder='...'
                            name='place'
                            className='inputFoodBox form-control'
                            value={food.place}
                            onChange={inputOnChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label className='inputFood' htmlFor='location'>location</label>
                            <br />
                            <input
                            type='text'
                            placeholder='...'
                            name='location'
                            className='inputFoodBox form-control'
                            value={food.location}
                            onChange={inputOnChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label className='inputFood' htmlFor='cuisine'>cuisine</label>
                            <br/>
                            <input
                            type='text'
                            placeholder='...'
                            name='cuisine'
                            className='inputFoodBox form-control'
                            value={food.cuisine}
                            onChange={inputOnChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label className='inputFood' htmlFor='rating'>rating</label>
                            <br/>
                            <input
                            type='text'
                            placeholder='...'
                            name='rating'
                            className='inputFoodBox form-control'
                            value={food.rating}
                            onChange={inputOnChange}
                            />
                        </div>
                        <br />

                        <div className='form-group'>
                            <label className='inputFood' htmlFor='review'>review</label>
                            <br/>
                            <textarea
                            placeholder='...'
                            name='review'
                            className='inputFoodBox form-control'
                            value={food.review}
                            onChange={textAreaOnChange}
                            rows={6}
                            />
                        </div>
                        <br />

                        <button
                        type='submit'
                        className='updateFoodbtn btn-outline-info btn-lg btn-block'
                        >
                            update place
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

};

export default UpdateFoodInfo;
