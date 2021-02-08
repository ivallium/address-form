import React from 'react';
import { TimeSelectProps } from '../../types/types';

const years = Array.from(Array(30).keys())
const months = Array.from(Array(12).keys())

// Select list for month and years, only issue was trying to style the select correctly with the chevron-down.png
function TimeSelect(props: TimeSelectProps) {

    return (
        <>
        <label>{"How long have you lived at your current address?"}</label>
        <div className="time-select-div">
            <div className="form-input">
                <select name="year" id="year-select" value={props.year} onChange={(e) => props.setYears(e.target.value)}>
                    {years.map((year: number, index: number) => (
                        <option value={year}>{year}{index === 1 ? " year" : " years"}</option>
                    ))}
                </select>
                <img width={15} alt={"down"} src="./assets/chevron-down.png"/>

            </div>
            <div className="form-input">
                <select name="month" id="month-select" value={props.month} onChange={(e) => props.setMonths(e.target.value)}>
                    {months.map((month: number, index: number) => (
                        <option value={month}>{month}{index === 1 ? " month" : " months"}</option>
                    ))}
                </select>
                <img width={15} alt={"down"} src="./assets/chevron-down.png"/>
            </div>
        </div>
        </>
    );
}

export default TimeSelect;

