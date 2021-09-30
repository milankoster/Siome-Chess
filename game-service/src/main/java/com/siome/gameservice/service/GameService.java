package com.siome.gameservice.service;

import com.siome.gameservice.entity.Game;
import com.siome.gameservice.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

}
