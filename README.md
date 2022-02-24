# War Thunder Rate Fight - Project Overview

## Project Description

War Thunder Rate Fight is a discussion platform for reviewing aircraft within War Thunder and sharing opinions and details for the spectrum of players. You can add new aircraft(post MVP) or simply review existing ones.

## Wireframes

[Wireframes](https://www.figma.com/file/TZpTMMh7pJJudJP1tRP2v8/Untitled?node-id=0%3A1)

## Technical architecture

[Frontend](https://whimsical.com/W9tY9WosB2puQb81E2zRFo) and [Backend](https://whimsical.com/couch-working-5z7fpHtMBA94BiigcXNXBX)

## API

MongoDB with two collections:

1. User collection with the following schema:

- userName
- password
- firstName
- lastName
- email

2. War Thunder Rate Fights collection with the following schema:

- title
- description
- rating


## MVP/PostMVP

Add 2 separate classes of aircraft (bombers and attackers)

Option to add new aircraft for users

### MVP

- Landing page with general info
- User functionality: create user account and log in
- War Thunder Rate Fight functionality: list all existing aicraft, detail page for each aircraft, create new posts, posts and edit the offers posted by you

### PostMVP

- User section: view and edit user info
- Create new aircraft
- Filter aircaft via search bar
- add 2 more classes of aircraft (bombers and attackers)


## Project Schedule

| Day   | Deliverable                                                               | Status |
| ----- | ------------------------------------------------------------------------- | ------ |
| Feb 24 | Proposal Approval, project setup                                          | WIP    |
| Feb 25 | Backend functionality                                                     |        |
| Feb 26 | Creating React app, API calls, authentication and component functionality |        |
| Feb 27 | Component functionality & styling                                         |        |
| Feb 28 | Wrapping up and deployment                                                |        |
| Feb 29 | Potentials bugs, post-mvp (?) and presentations                           |        |

## Timeframes

| Component                                                                               | Priority | Estimated Time | Time Invested | Actual Time |
| --------------------------------------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| [Proposal](https://github.com/timhausweiler/p3-couchworking/issues/1)                   |    H     |       2        |       2       |      2      |
| [Github setup (backend)](https://github.com/timhausweiler/p3-couchworking/issues/2)     |    H     |       1        |       1       |      1      |
| [MongoDB setup](https://github.com/timhausweiler/p3-couchworking/issues/3)              |    H     |      0.5       |      0.5      |     0.5     |
| [Create backend routes](https://github.com/timhausweiler/p3-couchworking/issues/4)      |    H     |      2       |      2      |     2     |
| [Create backend controllers](https://github.com/timhausweiler/p3-couchworking/issues/5) |    H     |      5       |      5      |     5     |
| [Deploy backend](https://github.com/timhausweiler/p3-couchworking/issues/6)             |    H     |      0.5       |      0.5      |     0.5     |
| [Github setup (frontend)](https://github.com/timhausweiler/p3-couchworking/issues/17)   |    H     |      tbd       |      tbd      |     tbd     |
| [Create React app](https://github.com/timhausweiler/p3-couchworking/issues/11)          |    H     |      tbd       |      tbd      |     tbd     |
| [CRUD requests / API calls](https://github.com/timhausweiler/p3-couchworking/issues/12) |    H     |      tbd       |      tbd      |     tbd     |
| [Authentication](https://github.com/timhausweiler/p3-couchworking/issues/13)            |    H     |      2       |      2      |     2     |
| [Build screens](https://github.com/timhausweiler/p3-couchworking/issues/14)             |    H     |      tbd       |      tbd      |     tbd     |
| [Styling](https://github.com/timhausweiler/p3-couchworking/issues/15)                   |    H     |      tbd       |      tbd      |     tbd     |
| [Deploy frontend](https://github.com/timhausweiler/p3-couchworking/issues/16)           |    H     |      tbd       |      tbd      |     tbd     |
| Bugfixes                                                                                |    H     |      tbd       |      tbd      |     tbd     |
| Total                                                                                   |    H     |      tbd       |      tbd      |     tbd     |
