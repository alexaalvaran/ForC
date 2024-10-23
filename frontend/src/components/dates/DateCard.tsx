import React from "react";
import { useRouter } from "next/navigation";
import { Dates } from "./Dates";

interface IProp {
    dates?: Dates;
}

const DatesCard = ({dates}: IProp) => {
    const router = useRouter();

    if(dates == undefined){
        return null;
    }

    const onClick = () => {
        router.push(`/showDate/${dates._id}`)
    };

    return(
        <div className='dates-card text-center' onClick ={onClick}>
            <h1 className='dates-card-title'>{dates.idea}</h1>
        </div>
    );
};

export default DatesCard;