package com.siome.gameservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@AllArgsConstructor
public class ChessMove {

    @Getter
    private int userId;

    @Getter
    private String origin;

    @Getter
    private String destination;

}
