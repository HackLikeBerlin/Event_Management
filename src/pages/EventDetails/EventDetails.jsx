import { useParams } from "react-router-dom"
import eventList from "../../EventDataBase/EventDataBase";
import './EventDetails.css'
import Navigation from "../../Components/Navigation/Navigation";
import {MdCalendarMonth} from 'react-icons/md'
import {IoLocationSharp} from 'react-icons/io5'
const EventDetails = () => {
  const {id}=useParams()
const convertIdStringToNumber=Number(id)

  const FilteredEvents=eventList.find((eventDetails)=>{
    return eventDetails.id===convertIdStringToNumber
  })

  
  
return (
    <>
      <div className="event-details-container">
        <Navigation/>
        <div className="event-details-wrapper">
          <img src={FilteredEvents.img} alt="Events" />
          <div className="event-details-content">
            <h3>Event Name :{FilteredEvents.heading}</h3>
           <div className="small-details">
            <p className="date">
            <MdCalendarMonth className="icon"/>
            <span className="font-weight-med">
                {FilteredEvents.date.month}
            </span>
            <span className="font-weight-med">{FilteredEvents.date.year}</span>
            </p>

            <p className="location font-weight-med">
                <IoLocationSharp className="icon"/>
                {FilteredEvents.location}
            </p>
           </div>

           <p className="description">
            <span className="description-heading">Event description</span>
            <span className="description-heading-para">
              {FilteredEvents.description}
            </span>
           </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default EventDetails