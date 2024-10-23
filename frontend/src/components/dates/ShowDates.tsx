import React, {useState, useEffect} from "react";
import Link from "next/link";
import { Dates } from "./Dates";
import DatesCard from "./DateCard";

function ShowDates(){
    const[dates, setDates] = useState<Dates[]>([]);
    const[searchQuery, setSearchQuery] = useState("");
    const[filteredDates, setFilteredDates] = useState<Dates[]>([]);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/dates`)
        .then((res) => {
            return res.json();
        })
        .then((dates) => {
            setDates(dates);
            setFilteredDates(dates);
        })
        .catch((err) => {
            console.log('error from show dates' + err);
        });
    }, []);

    useEffect(() => {
        const filtered =dates.filter((date) =>
        date.idea.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDates(filtered);
    }, [searchQuery, dates]);

    const datesList =
      dates.length === 0
        ? 'there are no date ideas'
        : filteredDates.map((dates, k) => <DatesCard dates={dates} key={k}/>);

        return(
            <div className="ShowDates text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br/>
                            <h2 className="showDateTitle"> date ideas! </h2>
                        </div>
                        <div className='col-md-11'>
                            <Link
                            href='/newDate'
                            className='newDatebtn btn-outline-warning float-right'
                            >
                                + add a new date idea
                            </Link>
                            <br /> <br />
                        </div>
                        <div className='col-md-11'>
                            <input
                            type='text'
                            className='searchBar form-control'
                            placeholder='search for a date idea'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='dates'>
                        {datesList}
                    </div>
                </div>
            </div>
        );
}

export default ShowDates;