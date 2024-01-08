import EventCard from "../EventCard/EventCard";
import eventList from "../../EventDataBase/EventDataBase"
import './SearchEvent.css'

const SearchEventList = ({monthYear}) => {
const {selectedMonth,selectedYear}=monthYear;
console.log(selectedMonth,selectedYear);

const filteredEvents=eventList.filter((eventDetail)=>{
  return(
    eventDetail.date.year===selectedYear && 
    eventDetail.date.month===selectedMonth
  )
})

const renderEventsCards=()=>{
  return filteredEvents.map((eventDetails)=>{
    const {id,date,heading,location,img}=eventDetails;
     return <EventCard
      key={id} 
      id={id}
      date={date}
      heading={heading}
      location={location}
      img={img}
      />
  })

}

  return (
    
      <>
      {filteredEvents.length>0 ? (renderEventsCards()):<h1>Opps!!! No Event Found</h1>}
      </>
    
  )
}

export default SearchEventList