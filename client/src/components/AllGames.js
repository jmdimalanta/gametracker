import React, { useState , useEffect } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';


const AllGames = (props) =>{

    const [gameList, setGameList] = useState([]);

    useEffect (()=>{
        axios.get('http://localhost:8000/api/games')
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGameList(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    const logout = (e) =>{
        axios.post
        (
            "http://localhost:8000/api/users/logout",
            {},
            {
                withCredentials: true,
            },
        )
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
        });
    };


    return(
        <div>
            <header>
                <h1>Welcome to Gametracker!</h1>
                <nav><Link to={"/new"}>Add a Game</Link>
                <button className='btn btn-primary mx-3' onClick={logout}>Logout</button>
                </nav>
            </header>
            <h2>Here is your backlog!</h2>
            <table className='table table table-bordered table-dark table-hover'>
                <thead>
                    <tr>
                        <th>Game Title</th>
                        <th>Publisher</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        gameList.map((game, index)=>(
                            <tr key={game._id}>
                                <td>{game.title}</td>
                                <td>{game.publisher}</td>
                                <td>
                                    <Link to={`/game/${game._id}`}>View |</Link>
                                    <Link to={`/edit/game/${game._id}`}> Edit</Link>
                                
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllGames;