import React, {useState} from 'react';
import './Play.sass'
import PlayerBanner from "../Board/PlayerBanner/PlayerBanner";
import opponent_avatar from "../../assets/icons/opponent-avatar.png"
import own_avatar from "../../assets/icons/own-avatar.png"

import Board from "../Board/Board";
import { Client, Message } from '@stomp/stompjs';
import {Button} from "react-bootstrap";



const Play = () => {

    const [client, setClient] = useState()

    function connect() {
        const socket = new Client({
            brokerURL: 'ws://localhost:9191/game/websocket'
        })
        socket.activate()
        setClient(socket)
    }

    return (
        <div className="home-horizontal-flex">
            <div className="play-chessboard-wrapper">
                <Button id="connect-button" onClick={() => connect()}>
                    Connect
                </Button>

                <PlayerBanner avatar={opponent_avatar} name="Opponent"/>

                {client !=null &&
                <Board stompClient={client}> </Board>
                }

                <PlayerBanner avatar={own_avatar} name="Milan"/>
            </div>
        </div>
    );
};

export default Play;

