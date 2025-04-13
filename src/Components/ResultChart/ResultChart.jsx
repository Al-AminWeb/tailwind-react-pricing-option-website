import React from 'react';
import {Line, LineChart, XAxis, YAxis} from "recharts";


const resultData= [
    { name: "Arman Rahman", physics: 85, chemistry: 78, math: 92 },
    { name: "Samira Akter", physics: 72, chemistry: 81, math: 87 },
    { name: "Tanvir Hasan", physics: 90, chemistry: 89, math: 95 },
    { name: "Farhana Jahan", physics: 68, chemistry: 75, math: 80 },
    { name: "Rifat Karim", physics: 88, chemistry: 82, math: 85 },
    { name: "Nadia Sharmeen", physics: 92, chemistry: 95, math: 99 },
    { name: "Mahin Islam", physics: 75, chemistry: 78, math: 73 },
    { name: "Lamia Sultana", physics: 81, chemistry: 77, math: 89 },
    { name: "Rahim Chowdhury", physics: 69, chemistry: 74, math: 70 },
    { name: "Sadia Afrin", physics: 87, chemistry: 90, math: 94 }
];
const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Line dataKey="math"></Line>
            <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;
