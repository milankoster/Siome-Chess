import './Board.sass'
import Chessground from 'react-chessground'
import Chess from 'chess.js'
import 'react-chessground/dist/styles/chessground.css'
import {useState} from "react";

const Board = ({stompClient}) => {

    const [chess, setChess] = useState(new Chess())
    const [fen, setFen] = useState("")

    const [selectVisible, setSelectVisible] = useState(false)
    const [lastMove, setLastMove] = useState()


    const onMessageReceived = (message) => {

        const message_body = JSON.parse(message.body)
        const origin = message_body.origin
        const destination = message_body.destination
        const move = {from: origin, to: destination, promotion: 'x'}

        chess.move(move)
        setFen(chess.fen())
        setLastMove([origin, destination])

    }

    stompClient.onConnect = function (frame) {
        console.log("on connect from board.js")
        stompClient.subscribe("/game/public", onMessageReceived);
    }

    const onMove = (from, to) => {
        const moves = chess.moves({ verbose: true })
        for (let i = 0, len = moves.length; i < len; i++) { /* eslint-disable-line */
            if (moves[i].flags.indexOf("p") !== -1 && moves[i].from === from) {
                promotion(from, to, "q")
                return
            }
        }
        if (chess.move({ from, to, promotion: "x" })) {
            setFen(chess.fen())
            setLastMove([from, to])
            console.log("Move: " + from + "-" + to)

            const move = {
                userId: 1,
                origin: from,
                destination: to,
            }
            stompClient.publish({
                destination: "/app/chess.send",
                body: JSON.stringify(move)
            })
        }
    }

    const promotion = (from, to, e) => {
        chess.move({ from, to, promotion: e })
        setFen(chess.fen())
        setLastMove([from, to])
        setSelectVisible(false)
    }

    const turnColor = () => {
        return chess.turn() === "w" ? "white" : "black"
    }

    const calcMovable = () => {
        const dests = new Map()
        chess.SQUARES.forEach(s => {
            const ms = chess.moves({ square: s, verbose: true })
            if (ms.length) dests.set(s, ms.map(m => m.to))
        })
        return {
            free: false,
            dests: dests,
            color: turnColor()
        }
    }

    return (
        <div>
            <Chessground
                width="38vw"
                height="38vw"
                turnColor={turnColor()}
                movable={calcMovable()}
                lastMove={lastMove}
                fen={fen}
                onMove={onMove}
                style={{ margin: "auto" }}
            >
            </Chessground>
        </div>
    );
};

export default Board;


