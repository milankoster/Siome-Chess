# View

This is the game service of the Siome project. 

The game service acts as a WebSocket server. Its main purpose is to make a connection with the players and relay the moves they make to each other. While the validation should also happen server side I chose to prioritise the Docker and CI/CD of the project instead.

If the view shows a permanent grey screen with the text 'Redirecting...' there's most likely an issue with keycloak.

The application can be run using the following command.
### `mvn spring-boot:run`
