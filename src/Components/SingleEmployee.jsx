import React from 'react'
import { useLocation } from 'react-router-dom'

function SingleEmployee() {
    const location = useLocation();
    const { state } = location;
    const { card } = state;
    return (
        <section className='mainsection'>
         <h1 className='mainheading'>More Infromation About Employee</h1>
        <div className='Singlediv'>
            {
                card.map((item, i) => {
                    return (
                        <div className='singledetails' key={i}>
                            <div className="imgdiv">
                                <img src={item.picture.large} alt="Employee Image" />
                            </div>
                            <div className='maindetils'>
                                <p>{`Employee Id : ${item.id.name} Value : ${item.id.value}.`}</p>
                                <div className='name'>
                                    <p>{`Name : ${item.name.title} ${item.name.first} ${item.name.last}.`}</p>
                                </div>
                                <div className="gender">
                                    <p>{`Gender : ${item.gender}.`}</p>
                                </div>
                                <p>{`Date Of Birth : ${item.dob.date.slice(0,10)}.`}</p>
                                <div className="phone">
                                    <p>{`Phone : ${item.phone}.`}</p>
                                </div>
                                <p>{`Email : ${item.email}.`}</p>
                                <p>{`Location : ${item.location.city}, ${item.location.state}, ${item.location.country}.`}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </section>
    )
}

export default SingleEmployee