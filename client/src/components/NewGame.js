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

            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text"/>
                    {
                        errors.title?
                        <span>{errors.title.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Publisher</label>
                    <input value={publisher} onChange={(e)=> setPublisher(e.target.value)} type="text"/>
                    {
                        errors.publisher?
                        <span>{errors.publisher.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Rating</label>
                    <select value={rating} onChange={(e)=>setRating(e.target.value)} name="rating">
                        <option value = "None" defaultValue hidden>Select a Rating</option>
                        <option value = "E">E</option>
                        <option value = "E10">E10</option>
                        <option value = "T">T</option>
                        <option value = "M">M</option>
                        <option value = "RP">RP</option>
                    </select>
                    {
                        errors.rating?
                        <span>{errors.rating.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Image</label>
                    <input value={image} onChange={(e)=> setImage(e.target.value)} type="text"/>
                    {
                        errors.image?
                        <span>{errors.image.message}</span>
                        :null
                    }
                </div>
                <div>
                    <label>Year Released</label>
                    <input value={yearReleased} onChange={(e)=> setYearReleased(e.target.value)} type="number"/>
                    {
                        errors.yearReleased?
                        <span>{errors.yearReleased.message}</span>
                        :null
                    }
                </div>
                <button>Add Game</button>
            </form>
        </div>
    )
}

export default NewGame;