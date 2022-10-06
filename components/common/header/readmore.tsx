import { Typography } from '@mui/material';
import React, { useState } from 'react';

export interface IReadMoreProps {
    children: any
}

export default function ReadMore({ children }: IReadMoreProps) {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <Typography component="p" mb={{ xs: "3.5", md: "5" }} className="text">

            {isReadMore ? text.slice(0, 150) : text}
            <span style={{ color: "#FF6464", fontWeight: "bold", fontSize: "18px", cursor: "pointer" }} onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "...Read More" : " Show Less"}
            </span>

        </Typography>

    );
};