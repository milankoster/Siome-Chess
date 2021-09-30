import React, {useEffect} from 'react';
import './Home.sass'
import chessboard from "../../assets/chessboard-pieces.png";
import {Button} from "react-bootstrap";
import play_icon from '../../assets/icons/play.png'
import computer_icon from '../../assets/icons/computer.png'
import {Container, Col, Row} from "react-bootstrap";

import {Link} from "react-router-dom";
import axios from "axios";

const Home = () => {

    const Url = "http://gateway:9191/game/example"
    const fetchOptions = {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    useEffect(() => {
        const fetchExample = async () => {
            const result = await axios.get(
                Url, fetchOptions
            );
            return result.data;
        }
        fetchExample().then(r => console.log("option 1 " + r));
    }, []);


    useEffect(() => {
        const fetchCategoryByName = async () => {
            const result = await axios.get("http://localhost:9191/game/example",
                { headers: { "Content-Type": "application/json" } }
            )
            return result.data;
        }
        fetchCategoryByName().then(r => console.log("option 2 " + r))
    }, []);


    return (
        <div className="home-wrapper">
            <Container>
                <Row>
                    <Col className="chessboard-column">
                        <img src={chessboard} alt="chessboard.png missing" className="chessboard-image"/>
                    </Col>
                    <Col>
                        <div className="header-text">
                            Play Chess for Free on Siome.com
                        </div>
                        <div className="subheader-text">
                            <span style={{color: "white"}}>107 </span>
                            Games Played Today
                        </div>

                        <Link to="/play" className="button">
                            <Button variant="green" className="button" id="play">
                                <img src={play_icon} className="image" id="play" alt="Play Icon"/>
                                <div className="text">
                                    <div className="header">
                                        Play Online
                                    </div>
                                    <div className="subheader">
                                        Play against a random opponent
                                    </div>
                                </div>
                            </Button>
                        </Link>


                        <Button variant="gray" className="button" id="computer">
                            <img src={computer_icon} className="image" id="computer" alt="Computer Icon"/>
                            <div className="text">
                                <div className="header">
                                    Play Computer
                                </div>
                                <div className="subheader">
                                    Play against stockfish
                                </div>
                            </div>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Home;
