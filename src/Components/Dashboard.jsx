import React, { useEffect, useState } from 'react'
import {Link} from"react-router-dom";
const Dashboard = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
    const response = await fetch("http://localhost:3000/eventData");
    setData(await response.json());
  }
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>


      <section>

        <div className="container py-5">
          <div className="row justify-content-center">
            {/* <h2 className='text-center text-5xl'>All Event </h2> */}
            {
              data.map((eventData) => {
                return (

                  <div className="col-md-8 col-lg-6 col-xl-4" style={{ paddingTop: "2rem" }}>
                    <div className="card text-black">
                      <img src={eventData.image}
                        className="card-img-top" alt="Apple Computer" style={{ width: "auto", height: "300px" }} />
                      <div className="card-body">
                        <div className="text-center">
                          <h5 className="card-title">{eventData.description}</h5>
                        </div>
                        <div>
                          <div className="d-flex justify-content-between">
                            <span>Event Price</span><span>{eventData.price}</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Event Location</span><span>{eventData.location}</span>
                          </div>
                          <div className="d-flex justify-content-between">
                            <span>Event Date</span><span>{eventData.eventDate}</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between total font-weight-bold mt-4">
                          <span>Event City</span><span>{eventData.City}</span>
                        </div>
                        <div className='text-center'>
                        <Link to={`/Details/${eventData.id}`} className="btn btn-primary center p-3">View</Link>
                        </div>
                    
                      </div>
                    </div>
                  </div>

                )
              })
            }

          </div>
        </div>
      </section>


    </>
  )
}

export default Dashboard



