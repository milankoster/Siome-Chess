# Service Registry

This is the service registry of the Siome Project.

_The [service registry] is a key part of service discovery. It is a database containing the network locations of service instances._

The service registry is a key part of the microservice architecture. It functions as a database containing the network locations of all connected services. When the API Gateway requests a service the registry will choose a suitable one and return its location.

The application can be run using the following command.
### `mvn spring-boot:run`
