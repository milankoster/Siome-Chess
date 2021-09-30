# Architecture and Technical Choices

This document covers the architectural and technical choices of the Siome project. It includes the following topics:

- Architecture 
	- Front-end Frameworks
	- Springboot
	- SQL vs NoSQL
	- Microservices
	- Why Java
- Web App User Experience
- CI/CD
- Integration Testing
- Hibernate
- Cypress
- Docker

## Architecture
### Front-end Frameworks
Before deciding which JavaScript Framework to use I decided to do some research regarding what is available and popularly used. This is further described in my report called “Comparing Frond End JavaScript Frameworks”. Once uploaded this were be referenced.

My final decision was to use React for this project as it fit the scale and was relatively easy to pick up.

---

### Springboot
“_Spring Boot is an open-source micro framework maintained by a company called Pivotal. It provides Java developers with a platform to get started with an auto configurable production-grade Spring application. With it, developers can get started quickly without losing time on preparing and configuring their Spring application_".

_Spring Boot is built on top of the Spring framework, and it comes with many dependencies that can be plugged into the Spring application. Some examples are Spring Kafka, Spring LDAP, Spring Web Services, and Spring Security. However, developers have to configure each building brick themselves using a lot of XML configuration files or annotations_.”

In short, the framework allows you to get started quickly. Although the framework offers a lot of options, developers must configure and annotate a bunch to make full use of these.

“_The Spring framework focuses on providing flexibility through its dependency injection feature. It helps to inject the required dependencies quickly but also to develop your application in a loosely coupled fashion._

_Also, the user community is huge. If you want free learning materials and courses, you’ll find plenty out there. The accessibility of education has had a big impact on the framework’s popularity_.”

The inherit dependency injection feature gives developers a quick and easy way to couple their application together quickly, while minimising constraints. Because a lot of developers use the spring boot framework there is a very large community and lots of explanations and tips on good practises.

---
### SQL vs NoSQL
One of the largest differences between SQL and NoSQL is the way the data is structured. SQL databases are table-based, while NoSQL databases are either document-based, key-value pairs, graph database or wide-column stores.

Another factor when deciding on a type of data storage is the scalability. SQL databases are vertically scalable, meaning that can scale up a single server through CPU, RAM and SSD. NoSQL databases are horizontally scalable, which means you can instead add more servers.

Relational database systems are better suited for systems that require multi row queries. NoSQL works best regarding Big Data and real-time web apps. Think about companies like Google, Twitter and Facebook, which store enormous amounts of data. Because of the scalability, NoSQL goes hand in hand with microservices. It should also be used to store temporary data like shopping carts and wish lists.

---

### Microservices
_“Microservice architectures are the ‘new normal’. Building small, self-contained, ready to run applications can bring great flexibility and added resilience to your code. Spring Boot’s many purpose-built features make it easy to build and run your microservices in production at scale.”_

Microservices are a modern way of developing software in small packages. While a monolithic application is built as a single unit, microservices can function independent of one another. The smaller scale can make maintenance easier, but more importantly allows you to scale your application more easily.


### Java
My reason for choosing java as a back-end language was to expand my general knowledge. Java is the most used language after python with approximately 8 million developers using it.

To get a generic feeling for the language I set up a very simple banking application. Although the syntax is a little different, it is very easy to get used to Java after having learned C#.

## Web App User Experience
_“User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function._

_“User Experience Design” is often used interchangeably with terms such as “User Interface Design” and “Usability”. However, while usability and user interface (UI) design are important aspects of UX design, they are subsets of it – UX design covers a vast array of other areas, too. A UX designer is concerned with the entire process of acquiring and integrating a product, including aspects of branding, design, usability and function. It is a story that begins before the device is even in the user’s hands.”_

In my project end-users are people that utilise an online chess application. My UI is highly based on chess.com: one of the most popular chess websites.

Most pages will be built up out of a sidebar and the rest of the content. The sidebar will be on the left because it’s most applicable to western people. If I were to branch out to eastern regions, it might be worthwhile to add an option to move this sidebar to the right.

The homepage will be used largely as a welcome page with the post important navigation links separately available. These can also be found in the sidebar.

<img src="https://image.prntscr.com/image/7nO9h4zNQXWIq910K5c5pQ.png">

In a Faq section users can find answers to some common questions. The login and logout buttons will also be a part of the sidebar menu. The logo is taken from chess.com, with the name replaced to siome.com.

You can navigate the app without logging in. While a lot of features are available without authentication, you have to login to be a part of the matchmaking and to view your past matches.

I’ve done my best to make the homepage as responsive as possible by creating a wrapper that imports the page as child prop. This way, the responsive wrapper can be used for all other pages.

![](https://i.imgur.com/Oh9hnyH.gif)

The chessboard image automatically shrinks at the pages gets smaller and disappears at a certain width. The buttons and footer also scale proportionally to the page. Once the page gets even thinner and begins to near mobile format, the sidebar disappears into a hamburger menu.

  
When selected, the sidebar menu smoothly slides out and greys out the rest of the page. In order to close it, you can click anywhere in the remaining space.

## CI/CD

I’ve decided to use GitHub Actions for my CI/CD. I was previously using the GitLab that school offers but decided to switch over to GitHub because of vast amount of available documentation. I prefer keeping my CI/CD inside GitHub, so I don’t have to involve any external programs.

You can create workflow by creating a .yml file inside a .github/workflows folder. These workflow files are automatically registered and visible under the actions tab. I created two separate workflows; one which triggers on pull requests and one that triggers when a branch is merged into master.

GitHub offers 2000 minutes of GitHub Actions for free on private repositories. Each stage runs on a different virtual machine, meaning that your data is not automatically persisted. To reduce build times, I upload my build as an artifact and download it whenever I need it.

### SonarQube

I used SonarQube as a static code analysis tool. It’s very easy to set up at sonarcloud.io and automatically reports on any bugs, vulnerabilities, security hotspots and code smells it finds. The results are logged as a comment under the pull requests or can be viewed on sonarcloud.io. Here you can also set on which part of the code should be reported on. As opposed to code in the last commit, I went to any new code of the past 14 days.

## Integration Testing

I mainly wanted to test the WebSocket connection. In order to figure this out I used the source [Write Integration Tests For Your Spring WebSocket Endpoints](https://rieckpil.de/write-integration-tests-for-your-spring-websocket-endpoints/).

I use the @BeforeEach annotation to set up the WebSocket client before each test. By using the @LocalServerPort annotation I find the port the app is running on, so I can connect to the correct WebSocket address.

I lastly use a BlockingQueue to store the subscription replies. Because the reply will be slightly delayed, I wait 1 second using the poll function.

## Hibernate

Object Relational Mapping allows us to write simple or complicated SQL queries using the object-oriented concept of your preferred language. This way we’re able to interact with our database in this language as opposed to using SQL.

When referring to ORM, people generally refer to one of the many libraries that make this possible.

![](https://i.imgur.com/HzGKN7g.png)

In SpringBoot, one of the most popular tools to implement is Hibernate. While there are many ORMs available in Java I decided to go with Hibernate because of how commonly it is used and how well it is documented.

Implementing the Java Persistance API is very easy. Although I did not need to use it as much in my individual project, I set it up in a lot of the microservices of my group project. After adding the dependency, you create a repository which extends JpaRepository. This repository can then be autowired into your service layer.

The JpaRepistory has a lot of default functionalities, but also allows you to add custom queries very easily. Below you can see how you would search for a category based on a specific Name parameter.

## Cypress

_Cypress is the future tool for testing front end modern web applications. It aims to overcome the hurdles that the engineers and developers face while testing web applications based on React and AngularJS. It is a quick, effortless and dependable tool for testing any applications that run on browsers.”_

You can make use of cypress to end-to-end test your application. I mostly made use of it to test my front-end and the navigation within it, but it’s possible to simulate anything from button presses to the filling out of forms.

The cypress documentation explains very well how to [install](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements) and get started with [testing](https://docs.cypress.io/guides/getting-started/testing-your-app#Step-3-Configure-Cypress) your app. In order to work together with keycloak, I made use of a library called [cypress-keycloak-commands](https://www.npmjs.com/package/cypress-keycloak-commands).

Cypress does require both your front-end and back-end to be running. I separated my tests in a file per page. Components such as the navigation sidebar are tested in their own file as well, so they don’t need to be tested on every page that they’re rendered.

![](https://i.imgur.com/aXKYFot.png)

It is possible to test one of the files or run all tests at once. Cypress opens the browser of your choosing and begins clicking through the app. I check whether all navigation links lead to where they should and whether various components are visible when they should be. It is also possible to specify the viewport as a variable, allowing you to check whether your page resizes the way you intend it to.

## Docker

_“Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.”_

Each of my services builds a docker image using a Dockerfile, which is a text document of instructions that contains a set of commands that a user could call. I tag all the files with a name, allowing me to easily find them in docker desktop.

![](https://i.imgur.com/9UyOd2M.png)

Instead of manually creating a container for every image, I make use of a docker compose file which creates and starts them automatically. Although mine is in the game-service the docker-compose file can be located in any of the services.

For each service I specify the container name, the image, the ports and the network. The latter isn’t necessary, because all containers in the docker-compose file will automatically be added to the same network.

Although all my images refer to local versions, you can also refer to an image on DockerHub. In a production environment this can get updated automatically after a CI/CD pipeline has passed.