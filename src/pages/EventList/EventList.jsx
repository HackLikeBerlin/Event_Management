import EventCard from '../../Components/EventCard/EventCard'
import eventList from '../../EventDataBase/EventDataBase'
import Navigation from '../../Components/Navigation/Navigation'
import './EventList.css'
const EventList = () => {

    const renderEventCard=()=>{
        return eventList.map((events)=>{
            const {id,date,heading,location,img}=events
            return(

                <EventCard
                 key={id} 
                 id={id}
                 date={date}
                 heading={heading}
                 location={location}
                 img={img}
                 />
            )
        })
    }
  return (
    
    <div>
        <Navigation/>
        <div className='event-list-wrapper'>
            <div className='event-list'>
                {eventList.length>0 ? (renderEventCard()):<h1>Opps!! No Event Found</h1>}
            </div>
        </div>
    </div>
    
  )
}

export default EventList