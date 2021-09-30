# Analysis

This document covers the analysis portion of the Siome project. It includes the following topics: 
- Stakeholder Analysis
- Customer Journey
- User Stories
- Non-Functional Requirements



## Stakeholder Analysis
In the stakeholder analysis we identify all the internal people and teams that the project will involve. We will describe some of their personas, influence, and interests.

In this project I am one of the main stakeholders, considering I am both the client, developer and one of the users. Another group of stakeholders are my teachers, as they will be judging my semester based on the project. There are also potential users, who desire a fluent experience when utilising the application. Lastly there are my classmates, considering we both follow each other’s progress and are assessed comparatively.

The potential users are somewhat casual players who already know each other and would like to play a game of chess against one another. They know the rules of chess and are looking for a quick and easy way to match up against each other online. In the future, the potential users might expand to more serious chess players who would like to compete based on an ELO system. Considering this possibility, we want to set things up in a way that allows expandability.

The users expect to be able to play against in each other in no more than a few clicks, preferably without the necessity to sign up. When playing against someone they know they would share a code or link and be placed in the same game.

During a game they expect to be able to drag and drop their pieces to make a move. When making an invalid move, the piece will move back to its original spot and nothing will happen. It is only possible to make moves when it is your own turn. It is also possible to easily determine what was the last move that was made through a highlight. When picking up a piece, they expect to be able to see all the places the piece can move. They expect to be able to offer a draw or resign using buttons and view the moves that were made during the game. Once a game has finished, they expect to be able to see whether they have won or lost.

At most, I expect a few dozen games to be played a day, with a similar number of total users. However, large chess websites such as chess.com facilitate millions of games every day. Were the project to expand a larger scale in the future, this should also be possible.

If the project is online for 2 or more years, it should continue to function with minimum upkeep. If another developer were to provide this upkeep or join the project, they should be able to access the proper documentation

## Customer Journey
The customer journey is what a customer experiences from when he first encounters the application until they hopefully promote it. The first encounter rarely leads to a direct purchase. In this case the focus will lay on the experience of using the application.

To analyse the customer journey, I decided to make a comparison of the two most popular chess websites and see what they have in common. Once you have reached their website, both chess.com and lichess.org offer a quick way to enter a game without the requirement to sign up. The play button is immediately visible from the homepage. They use default time-based settings (10 minutes and 5 minutes), which you can change in a menu after having pressed the play button.

Once you enter a game you move the pieces by dragging and dropping them. The last move is highlighted in a different colour and the previous moves and written down in chess notation on the right side of the board. Both websites also offer an option to chat to your opponent through a text chat. If the option is enabled, a timer ticks down and shows the amount of time players have. The chessboard also contains a notation of fields on the bottom and side of the board.

Signing up allows for more features such as ELO based matchmaking and saving your past matches. You can also choose a username which is visible for your opponent.

For my own application users will navigate using a sidebar, although a top navigation bar would suffice just as well. After selecting play, you will be able to select options such as the time, then receive a link or code that you can share with your opponent. The game itself will behave similarly to the common websites.

Once your match is done you can choose rematch to play again or use the sidebar to create a new game against someone else.

## User Stories


1.  As a **product owner** I want to be able to expand the application to facilitate millions of users so the project can grow nearly indefinity.
2.  As a **product owner** I want to be able to expand the application to include ELO based matchmaking so the project can be used for a wider target audience in the future.
3.  As a **chess player** I want to move chess pieces on a chessboard so that a classic game of chess can be played.
4.  As a **chess player** I want to see the moves my opponent makes within 300ms so that the pace of the game stays rapid.
5.  As a **chess player** I want my opponent only to control his colour’s pieces so that he cannot move my own.
6.  EPIC: As a **chess player** I want my opponent to only be able to make valid moves so that there is no discussion about move validity.
	1.  I want pieces to be unable to move to a square occupied by a piece of its own colour so that the game behaves as expected.
	2.  I want pieces to be restricted to their respective moment patterns so that the game behaves as expected.
	3.  I want pawns to be able to move one or two vertical places when they have not moved so that the game behaves as expected.
	4.  I want to promote a pawn to a piece of my choosing when it reaches the last rank so that the game haves as expected.
	5.  I want to be able to castle when the necessary conditions are met so that the game behaves as expected.
	6.  I want to be able to check the enemy by attacking the enemy king so that the game behaves as expected.
	7.  I want to be able to en passant when the necessary conditions are met so that the game behaves as expected.

7.  As a **chess player** I want to invite other people so that I can match up against them.
8.  As a **chess player** I want to be unable to make moves that would leave my king in danger to preserve the validity of the game.
9.  As a **chess player** I want the game to end when either player is in checkmate so that the victory goes to the winner.
10.  As a **website manager** I want to be able to manage users so that cheaters can be blocked from the application.
11.  As a **chess player** I want to be able to see the moves in chess notation throughout the game so that I can review the order in which they were made.
12.  As a **chess player** I want to be able to resign so that I can quit a game I no longer want to keep playing.
13.  As a **chess player** I want to see a notification when my king is in check so that I know I need to make a move that defends the king.
14.  As a **chess player** I want to view past matches so that I can review how they went.
15.  As a **chess player** I want to play with a timer so that I can play against an opponent under time pressure.
16.  As a **chess player** I want to match against random opponents so that I can play without inviting anyone.
17.  As a **chess player** I want to match against a computer to practise my chess skills.


## Non-Functional Requirements

“_Any Requirement That Specifies **How** The System Performs A Certain Function._

_Non-functional requirements cover all the remaining requirements which are not covered by the functional requirements. They specify criteria that judge the operation of a system, rather than specific behaviours, for example: “Modified data in a database should be updated for all users accessing it within 2 seconds.”_



1. Pages should be loaded in 2 seconds or less – based on Google’s recommended page load time.

2. Each request should be processed within 10 seconds.

3. The application should be nearly infinitely scalable by adding extra servers.

4. The application should be able to handle thousands of users and tens of thousands of games every 24 hours.

5. The application should have an uptime average of 98% or higher. This means that it can average a downtime of 30 minutes a day.

6. The uptime average should be scalable, allowing for a 99.9% uptime in the future.

7. The application should require minimum updates over the next 2 years. The amount of work should not exceed more than one workday each month.

8. The application’s architecture and development should be documented detailed enough for another developer to join the project and understand how it is put together.

9. The application should function on every desktop or laptop with chrome, Microsoft edge or Safari.

10. The application should be tested automatically to maintain a working environment.

11. User data should be stored in a secure manner.