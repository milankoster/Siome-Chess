package com.siome.gameservice.controller;

import com.siome.gameservice.model.ChessMove;
import net.minidev.json.JSONObject;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.messaging.converter.JsonbMessageConverter;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.converter.SimpleMessageConverter;
import org.springframework.messaging.simp.stomp.StompFrameHandler;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;
import org.springframework.web.socket.messaging.WebSocketStompClient;
import org.springframework.web.socket.sockjs.client.SockJsClient;
import org.springframework.web.socket.sockjs.client.WebSocketTransport;

import java.lang.reflect.Type;
import java.util.List;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

import static java.util.concurrent.TimeUnit.SECONDS;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class GameControllerTest {

    private WebSocketStompClient webSocketStompClient;

    @LocalServerPort
    private Integer port;

    @BeforeEach
    public void setup() {
        this.webSocketStompClient = new WebSocketStompClient(new SockJsClient(
                List.of(new WebSocketTransport(new StandardWebSocketClient()))));
    }

    @Test
    void sendChessMove() throws ExecutionException, InterruptedException, TimeoutException {

        BlockingQueue<Object> blockingQueue = new ArrayBlockingQueue(1);

        webSocketStompClient.setMessageConverter(new MappingJackson2MessageConverter());

        StompSession session = webSocketStompClient
                .connect(getWsPath(), new StompSessionHandlerAdapter() {
                })
                .get(1, SECONDS);

        session.subscribe("/game/public", new StompFrameHandler() {

            @Override
            public Type getPayloadType(StompHeaders headers) {
                return JSONObject.class;
            }

            @Override
            public void handleFrame(StompHeaders headers, Object payload) {
                System.out.println("Received message: " + payload);
                blockingQueue.add(payload);
            }
        });

        ChessMove chessMove = new ChessMove(1, "d2", "d4");
        session.send("/app/chess.send", chessMove);

        JSONObject move = new JSONObject();
        move.put("userId", 1);
        move.put("origin", "d2");
        move.put("destination", "d4");
        assertEquals(move, blockingQueue.poll(1, SECONDS));

    }

    private String getWsPath() {
        return String.format("ws://localhost:%d/game", port);
    }
}