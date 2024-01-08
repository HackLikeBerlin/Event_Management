import SearchEventList from "../../Components/SearchEventList/SearchEventList"
import FilterBox from "../../Components/FilterBox/FilterBox"
import './FilterEvents.css'
import { useState } from "react"
import Navigation from "../../Components/Navigation/Navigation"
const FilterEvents = () => {
const [monthYear,setMonthYear]=useState({
    selectedMonth:null,
    selectedYear:null

})
    const getMonthYear=(selectedMonth,selectedYear)=>{
      
        setMonthYear({selectedMonth,selectedYear})

    }
  return (
   <>
   <div>
    <Navigation/>
        <div className="find-events-wrapper">
        <FilterBox getMonthYear={getMonthYear}/>
        <SearchEventList monthYear={monthYear}/>
        </div>
   </div>
   </>
  )
}

export default FilterEvents