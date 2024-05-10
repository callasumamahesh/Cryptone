import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function MainPage() {
    const [card, setCard] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
                setCard(data.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            <h1 className='mainheading'>Employee Details</h1>
            <div className="maincard">
                <div className="card" onClick={() => navigate('/employee',{state : {card}})}>
            <h1 className="mainheading">
                Employee Card
            </h1>
                        {
                            card.map((item,i) => {
                                return (
                                    <div className='details' key={i}>
                                        <div className="imgdiv">
                                            <img src={item.picture.large} alt="Employee Image" />
                                        </div>
                                        <div className='maindetils'>
                                        <p>{`Name : ${item.name.title} ${item.name.first} ${item.name.last}`}</p>
                                            <div className="gender">
                                                <p>{`Gender : ${item.gender}`}</p>
                                            </div>
                                            <div className="phone">
                                                <p>{`Phone : ${item.phone}`}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    )
}

export default MainPage