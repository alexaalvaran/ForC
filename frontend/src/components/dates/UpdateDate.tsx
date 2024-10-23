import React, {useState, useEffect, ChangeEvent, FormEvent, ChangeEventHandler} from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Dates, DefaultDates } from "./Dates";

function UpdateDateInfo() {
    const[dates, setDates] = useState<Dates>(DefaultDates);
    const id = useParams<{id:string}>().id;
    const router = useRouter();

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/dates/${id}`)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            setDates(json);
        })
        .catch((err) => {
            console.log('error from update dares ' + err);
        });
    }, [id]);

    const inputOnChange = (event:ChangeEvent<HTMLInputElement>) => {
        setDates({...dates,[event.target.name]: event.target.value});
    };

    const textAreaOnChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        setDates({...dates,[event.target.name]: event.target.value});
    }

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/dates/${id}`,
            {
                method: 'PUT',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(dates)
            }
        ).then((res)=> {
            router.push(`/showDate/${id}`);
        }).catch((err) => {
            console.log('error from update date ' + err);
        });
    };

    return(
        <div className='UpdateDates'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <br />
                        <Link href='/dates' className="ourDatesbtn btn-outline-warning float-right">
                        our date ideas
                        </Link>
                    </div>
                    <br /> <br /> <br />
                    <div className='col-md-8 m-auto'>
                        <form noValidate onSubmit={onSubmit}>
                            <div className='form-group'>
                                <label className='inputDate' htmlFor='idea'>idea</label>
                                <br />
                                <input 
                                type='text'
                                placeholder="..."
                                name='idea'
                                className='inputDateBox form-control'
                                value={dates.idea}
                                onChange={inputOnChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <label className='inputDate' htmlFor='location'>location</label>
                                <br />
                                <input
                                type='text'
                                placeholder="..."
                                name='location'
                                className='inputDateBox form-control'
                                value={dates.location}
                                onChange={inputOnChange}
                                />
                            </div>
                            <br />

                            <div className='form-group'>
                                <label className='inputDate' htmlFor='description'>description</label>
                                <br />
                                <textarea
                                placeholder="..."
                                name='description'
                                className='inputDateBox form-control'
                                value={dates.description}
                                onChange={textAreaOnChange}
                                />
                            </div>

                            <br/>
                            <button
                            type='submit'
                            className='updateDatebtn btn-outline-info btn-lg btn-block'>
                                update date idea
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateDateInfo;