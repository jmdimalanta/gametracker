import React, { useState } from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';



const NewGame = (props) =>{

    const [title, setTitle] = useState("")
    const [publisher, setPublisher] = useState("")
    const [rating, setRating] = useState("")
    const [image, setImage] = useState("")
    const [yearReleased, setYearReleased] = useState("")
    const [errors, setError] = useState({})

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/games",
        {
            title,
            publisher,
            rating,
            image,
            yearReleased
        },
        {withCredentials: true}
        )
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/home");
        })
        .catch((err)=>{
            console.log(err);
            console.log("err.response:", err.response);
            console.log("err.response.data:", err.response.data);
            console.log("err.response.data.errors:", err.response.data.errors);
            setError(err.response.data.errors)
        })
    }

    return(
        <div>
            <header>
                <h1>Welcome to Gametracker!</h1>
                <nav><Link to={"/home"}>Home</Link></nav>
            </header>

            <div className="form-control w-25 mx-auto text center my-3 border border-3">
                <form onSubmit={submitHandler}>
                    <div>
                        <label className="form-label mx-auto">Title</label>
                        <input className="form-control" value={title} onChange={(e)=> setTitle(e.target.value)} type="text"/>
                        {
                            errors.title?
                            <span className= "error-text">{errors.title.message}</span>
                            :null
                        }
                    </div>
                    <div>
                        <label className="form-label mx-auto">Publisher</label>
                        <input className="form-control" value={publisher} onChange={(e)=> setPublisher(e.target.value)} type="text"/>
                        {
                            errors.publisher?
                            <span className= "error-text">{errors.publisher.message}</span>
                            :null
                        }
                    </div>
                    <div>
                        <label className="form-label mx-auto">Rating</label>
                        <select className='form-select' value={rating} onChange={(e)=>setRating(e.target.value)} name="rating">
                            <option value = "None" defaultValue hidden>Select a Rating</option>
                            <option value = "E">E</option>
                            <option value = "E10">E10</option>
                            <option value = "T">T</option>
                            <option value = "M">M</option>
                            <option value = "RP">RP</option>
                        </select>
                        {
                            errors.rating?
                            <span className= "error-text">{errors.rating.message}</span>
                            :null
                        }
                    </div>
                    <div>
                        <label className="form-label mx-auto">Image</label>
                        <input className="form-control" value={image} onChange={(e)=> setImage(e.target.value)} type="text"/>
                        {
                            errors.image?
                            <span className= "error-text">{errors.image.message}</span>
                            :null
                        }
                    </div>
                    <div>
                        <label className="form-label mx-auto">Year Released</label>
                        <input className="form-control" value={yearReleased} onChange={(e)=> setYearReleased(e.target.value)} type="number"/>
                        {
                            errors.yearReleased?
                            <span className= "error-text">{errors.yearReleased.message}</span>
                            :null
                        }
                    </div>
                    <button className="btn btn-primary my-3">Add Game</button>
                </form>
            </div>
        </div>
    )
}

export default NewGame;