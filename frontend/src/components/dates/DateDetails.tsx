'use client'

import React, {useState, useEffect} from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Dates, DefaultDates } from "./Dates";

function DatesDetails() {
    const[dates, setDates] = useState<Dates>(DefaultDates);

    const id= useParams<{id:string}>().id;
    const navigate = useRouter();

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/dates/${id}`)
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            setDates(json);
        })
        .catch((err) => {
            console.log('error from dates details' + err);
        });
    }, [id]);

    const onDeleteClick = (id:string) => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/dates/${id},
            {method:'DELETE'}`)
        .then((res) => {
            navigate.push('/dates');
        })
        .catch((err) => {
            console.log('error from show date details delete' + err);
        });
    };

    const onUpdateClick = () => {
        navigate.push(`/editDates/${dates._id}`);
    }

    const DateItem = (
        <div className="FoodDetails">
            <table>
                <tbody>
                    <tr>
                        <td>date idea</td>
                        <td>{dates.idea}</td>
                    </tr>
                    <tr>
                        <td>location</td>
                        <td>{dates.location}</td>
                    </tr>
                    <tr>
                        <td>description</td>
                        <td>{dates.description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

    return(
        <div className="FoodDetails">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-10 m-auto'>
                        <br /> <br />
                        <Link href = '/dates' className='ourDatesbtn btn-outline-warning float-right'>
                         our date ideas
                        </Link>
                        <br /> <br />
                        <div className='dateItem'>
                            {DateItem}
                        </div>
                        <br /> <br/>
                    </div>
                    <div className='col-md-6 m-auto'>
                        <button 
                        type='button'
                        className='updateDatebtn btn-outline-danger btn-lg btn-block'
                        onClick={onUpdateClick}
                        >
                            edit date idea
                        </button>
                    </div>
                    <br />
                    <div className='col-md-6 m-auto'>
                        <button
                        type='button'
                        className='deleteDatebtn btn-outline-danger btn-lg btn-block'
                        onClick = {() => {
                            onDeleteClick(dates._id || "");
                        }}
                        >
                            delete date idea
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DatesDetails;