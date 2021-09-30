package com.siome.gameservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Game {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long gameId;
    private String fen;
    private Long playerIdWhite;
    private Long playerIdBlack;
    private Long playerIdWinner;

}
