import React, { useState, useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import "./Visuals.css"
import Axios from 'axios'
import { useNavigate } from "react-router-dom"

const Visuals = () => {
    const navigate = useNavigate();
    const [eventList, setEventList] = useState({"amount":"0", "timeFrameStart":"0000-00-00", "date":"0000-00-00", "descripiton": "0"});
    const [index, setIndex] = useState(1);
    const [prevIndex, setPrevIndex] = useState(0);
    const [timeTotal, setTimeTotal] = useState(0);
    const [timePartial, setTimePartial] = useState(0);
    const [timeStart, setTimeStart] = useState("0");
    const [timeEnd, setTimeEnd] = useState("0");
    const [value, setValue] = useState(0);
    const [description, setDescription] = useState("0");
    const [currDate, setCurrDate] = useState(new Date());


    const prepData = () => {
        Axios.get('http://localhost:3001/data').then(res => {
            setEventList(res.data);
            setTimeStart(res.data[index]["timeFrameStart"]);
            setTimeEnd(res.data[index]["date"]);
            setValue(res.data[index]["amount"]);
            setDescription(res.data[index]["description"]);

        }).catch(e => {
            console.log(e);
        });
    }

    const incrementIndex = () => {
        setPrevIndex(index);
        if (index == eventList.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
        setTimeStart(eventList[index]["timeFrameStart"]);
        setTimeEnd(eventList[index]["date"]);
        setValue(eventList[index]["amount"]);
        setDescription(eventList[prevIndex]["description"]);
        difference();
        console.log(index);
    }

    const decrementIndex = () => {
        setPrevIndex(index);
        if (index == 0) {
            setIndex(eventList.length - 1);
        } else {
            setIndex(index - 1);
        }
        setTimeStart(eventList[index]["timeFrameStart"]);
        setTimeEnd(eventList[index]["date"]);
        setValue(eventList[index]["amount"]);
        setDescription(eventList[prevIndex]["description"]);
        difference();
        console.log(index);
        console.log(prevIndex);
        console.log(description);
    }

    const difference = () => {       
        const currDat = new Date();
        const dat1 = timeStart;
        const dat2 = timeEnd;

        const year2 = Number(dat2.slice(0, 4));
        const month2 = Number(dat2.slice(5, 7));
        const day2 = Number(dat2.slice(8, 10));

        const year1 = Number(dat1.slice(0, 4));
        const month1 = Number(dat1.slice(5, 7));
        const day1 = Number(dat1.slice(8, 10));

        const diffYear = Number(currDat.getFullYear() - year1);
        const diffMonth = Number(currDat.getMonth() + 1 - month1 );
        const diffDay = Number(currDat.getDate() - day1);

        const diffTime = (diffYear)*365 + (diffMonth)*30 + (diffDay);

        const time = (year2-year1)*365 + (month2-month1)*30 + (day2-day1);
        setTimePartial(diffTime);
        setTimeTotal(time);
    }

    const logout = () => {
        
        navigate("/");
    }

    useEffect(() => { 
        prepData();
      }, []) 
return (
    <div className='cont4'>
        <div className="logOut" onClick={logout}>
            Logout
        </div>
        <div>
            <div className='graph'>
                <PieChart className='chart'
                data={[
                { title: 'Completed', value: timePartial/timeTotal, color: '#89ef45' },
                { title: 'Time Remaining', value: 1-(timePartial/timeTotal), color: '#aeaeae' },
                ]}
                />
                <div className='text4'>{description}</div>
            </div>
        </div>
        <div className='buttons'>
            <div className="submit2" onClick={incrementIndex} >Next Event</div>
            <div className="submit2" onClick={decrementIndex} >Previous Event</div>
        </div>
        

    </div>
 );
};

export default Visuals;