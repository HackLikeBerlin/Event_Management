import { useEffect, useRef, useState } from "react"
import './FilterBox.css'
const FilterBox = ({getMonthYear}) => {
    
    
    const [selectedMonth,setSelectedMonth]=useState('January');
    const [selectedYear,setSelectedYear]=useState(2023)
    const yearRef=useRef(null)
    const MonthRef=useRef(null)

const months=[
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const years=[
        2023,2024
    ]

    const monthToDisplay=()=>{
        return months.map((month,index)=>{
                return(
                    <>
                    <option value={month} key={index}>{month}</option>
                    </>
                )
        })
    }

    const yearToDisplay=()=>{
        return years.map((year,index)=>{
            return(
                <>
                <option value={year} key={index}>{year}</option>
                </>
            )
        })
    }

    const handleMonthChange=()=>{
        setSelectedMonth(MonthRef.current.value)
    }

    const handleYearChange=()=>{
        setSelectedYear(Number(yearRef.current.value))

    }

   

   

    useEffect(()=>{
        const updateParents=()=>{
            getMonthYear(selectedMonth,selectedYear)
        }
        updateParents()
    },[selectedMonth,selectedYear])
  return (
   <>
   <div>
        <form action=""  className="filter-card">
            <div className="wrapper">
                <div className="date">
                    <label htmlFor="month">Month : </label>
                    <select name="month" id="" onChange={handleMonthChange} ref={MonthRef}>
                        {monthToDisplay()}
                    </select>
            </div>

            <div className="date">
                <label htmlFor="year">Year : </label>
                <select name="year" id="" onChange={handleYearChange} ref={yearRef}>
                    {yearToDisplay()}
                </select>
                
            </div>
           
           
            </div>
        </form>
   </div>
   </>
  )
}

export default FilterBox