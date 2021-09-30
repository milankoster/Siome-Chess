# Siome
Siome is a web application that allows users to play chess against one another. Many websites of the like already exist, the most used being chess.com, lichess.org and Chess24.com. I have chosen to copy the styling and UX of chess.com and only implemented the basic functionality of two players playing a game against each other. 

<img src="https://i.imgur.com/4oxvJIP.gif" width=72%>

Because this was a school project the focus was more on the general architecture and CI/CD as opposed to a large amount of functionality. Below you can see the functionality of a basic game of chess.

For the full functionality of the project it's necessary to run the following files: 
- [Service Registry](https://github.com/Desoxyr/Siome/tree/master/service-registry)
- [API Gateway](https://github.com/Desoxyr/Siome/tree/master/api-gateway)
- [Game Service](https://github.com/Desoxyr/Siome/tree/master/game-service)
- [View](https://github.com/Desoxyr/Siome/tree/master/siome-view)
- [Keycloak](https://github.com/Desoxyr/Siome/tree/master/keycloak)

Each folder has its own description which includes instructions on how to run it. While the goal was to run it using docker, this did not end up working due to a networking issue.

If you wish to try it out you'll be asked to log in. You can use `demo` as both the username and password. 

--- 

If you're interested in the full documentation of the project I highly recommend you to check out the [Analysis](https://github.com/Desoxyr/Siome/blob/master/Analysis.md) and [Architecture and Technical Choices](https://github.com/Desoxyr/Siome/blob/master/Architecture%20and%20Technical%20Choices.md).

