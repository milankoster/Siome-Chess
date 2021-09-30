package com.siome.gameservice.controller;


import com.siome.gameservice.entity.Game;
import com.siome.gameservice.model.ChessMove;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class GameController {

    @MessageMapping("/chess.send")
    @SendTo("/game/public")
    public ChessMove sendChessMove(@Payload final ChessMove chessMove){
        return chessMove;
    }

    public Game saveGame(){
        Game game = new Game();
        game.setGameId(123L);
        return game;
    }
}
