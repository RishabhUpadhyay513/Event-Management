import React, { useEffect, useState } from 'react'
import{useParams}from"react-router-dom";
import axios from 'axios'
import {Link} from 'react-router-dom'
const Details = () => {
    const {id}=useParams();

    const [event,setEvent]=useState([])
    console.log(id);

    useEffect(()=>{
        loadEvent();
    },[])

    const loadEvent = async () => {
        const usersData = await axios.get(`http://localhost:3000/eventData/${id}`)
        setEvent(usersData.data);
    }

  return (
    <>
         <div className="container py-5">
          <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-6 col-xl-4" style={{ paddingTop: "2rem" }}>
                    <div className="card text-black">
                      <img src={event.image}
                        className="card-img-top" alt="Apple Computer" style={{ width: "auto", height: "300px" }} />
                      <div className="card-body">
                        <div className="text-center">
                          <h5 className="card-title">{event.description}</h5>
                        </div>
                        <div>
                          <div className="d-flex justify-content-between">
                            <span>Event Price</span><span>{event.price}</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Event Location</span><span>{event.location}</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Event Date</span><span>{event.eventDate}</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between total font-weight-bold mt-4">
                          <span>Event City</span><span>{event.City}</span>
                        </div>
                        <div className='text-center'>
                        <Link to='/' className="btn btn-primary center p-3">Go Back</Link>
                        </div>
                      </div>
                    </div>
                  </div>

            

          </div>
        </div>

    </>
  )
}

export default Details