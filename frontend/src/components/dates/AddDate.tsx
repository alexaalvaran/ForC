import React, {ChangeEvent,FormEvent,useState} from "react";
import {useRouter} from "next/navigation";
import { Dates, DefaultDates } from "./Dates";

const NewDateComponent = () => {
    const navigate = useRouter();

    const[dates, setDates] = useState<Dates>(DefaultDates);

    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        setDates({...dates,[event.target.name]: event.target.value});
    };

    const onChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setDates({...dates,[event.target.name]: event?.target.value});
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/dates`, {
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(dates),
        })
        .then((res) => {
            setDates(DefaultDates);
            navigate.push("/dates");
        })
        .catch((err) => {
            console.log('error from new date' + err);
        });
    };

    return(
        <div className="NewDate">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <h1 className='titleText'> add a new date idea</h1>
                    </div>
                    <form onSubmit ={onSubmit}>
                        <div className= 'form-group'>
                            <h3 className='inputDate'>date idea</h3>
                            <input
                            type="text"
                            placeholder="..."
                            name="idea"
                            className="inputDateBox form-control"
                            value={dates.idea}
                            onChange={onChange}
                            required
                            />
                        </div>
                        <br/>
                        <div className='form-group'>
                            <h3 className='inputDate'>location</h3>
                            <input
                            type='text'
                            placeholder="..."
                            name="location"
                            className="inputDateBox form-control"
                            value = {dates.location}
                            onChange={onChange}
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <h3 className='inputDate'>description</h3>
                            <textarea
                            placeholder="..."
                            name="description"
                            className="inputDateBox form-control"
                            value={dates.description}
                            onChange={onChangeText}
                            />
                        </div>
                        <br/ >
                        <button
                        type="submit"
                        className = "submitNewDate"
                        >
                            add date
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewDateComponent;