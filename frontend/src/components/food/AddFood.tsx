import React, {ChangeEvent,FormEvent,useState} from "react";
import {useRouter} from "next/navigation";
import { Food, DefaultFood } from "./Food";

const NewFoodComponent = () => {
    const navigate = useRouter();

    const[food, setFood] = useState<Food>(DefaultFood);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFood({...food,[event.target.name]: event.target.value});
    };

    const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setFood({...food,[event.target.name]: event.target.value});
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/food`, {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(food),
        })
        .then((res) => {
            setFood(DefaultFood);
            navigate.push("/food");
        })
        .catch((err) => {
            console.log('error from new food' + err);
        });
    };

    return(
        <div className="NewFood">
            <h1 className="titleText">
                add a new food place
            </h1>
            <form onSubmit = {onSubmit}>
                <div className = "form-group">
                    <h3 className="inputFood">place</h3>
                    <input
                    type="text"
                    placeholder="..."
                    name="place"
                    className="inputFoodBox form-control"
                    value = {food.place}
                    onChange = {onChange}
                    required
                    />
                </div>
                <br />
                <div className="form-group">
                    <h3 className="inputFood">location</h3>
                    <input
                    type="text"
                    placeholder="..."
                    name="location"
                    className="inputFoodBox form-control"
                    value = {food.location}
                    onChange = {onChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <h3 className="inputFood">cuisine</h3>
                    <input
                    type="text"
                    placeholder="..."
                    name="cuisine"
                    className="inputFoodBox form-control"
                    value= {food.cuisine}
                    onChange = {onChange}
                    />
                </div>
                <br />
                <div className="form-group">
                    <h3 className = "inputFood">rating</h3>
                    <input
                    type="text"
                    placeholder="..."
                    name="rating"
                    className="inputFoodBox form-control"
                    value = {food.rating}
                    onChange = {onChange}
                    />
                </div>
                <br />
                <div className = "form-group">
                    <h3 className="inputFood">review</h3>
                    <textarea
                    placeholder="..."
                    name="review"
                    className="inputFoodBox"
                    value={food.review}
                    onChange = {onChangeText}
                    rows={6}
                    />
                </div>
                <button
                type="submit"
                className="submitNewFood"
                >
                    add new place 
                </button>
            </form>
        </div>
    )

}

export default NewFoodComponent;