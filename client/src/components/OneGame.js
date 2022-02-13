import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';



const OneGame = (props) =>{

    const {id} = props;
    const [game, setGame] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/games/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGame(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])

    const deleteGame = () =>{

        axios.delete(`http://localhost:8000/api/games/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/home");
            })
            .catch((err)=>{
                console.log(err)
            })
    }




    return(
        <div>
            <header>
                <h1>Welcome to Gametracker!</h1>
                <nav><Link to={"/home"}>Home |</Link>
                <Link to={"/new"}> Add a Game</Link> 
                </nav>
            </header>

            <h2>{game.title}</h2>
            <img src={game.image} alt="game cover art" style={{width: "200px", height: "200px"}} />
            <p>{game.publisher}</p>
            <p>{game.rating}</p>
            <p>{game.yearReleased}</p>

            <button onClick={deleteGame}>
                Completed
            </button>
        </div>
        
    )
}

export default OneGame;