# SPOTs-Beta
Social media application geared towards promoting outdoor activities. This Application is in its beta stages, where the APIs are being tested before major components of the MAP-Profile interface is integrated. Consider this a long term project where the current goal is to show off the ability to use API calls to add users to a database upon entering their information from the front end. Additionally, the interface allows interaction with my previously developed Chat API. Lastly, I show of the usage of Foreign keys in mySQL by employing the FriendsAPI. These APIs are directly integrated into the front-end, and two of them interact with mySQL while the Chat API interacts with mongoDB. This essentially shows off the ability to modularize, as any of the functinalities could be replaced with alternatives down the road. 

### Technologies in use:
- MongoDB
- mySQL
- React-native
- Python Flask
- React-native maps and Scaledrone

----------------------------------------------------------------------------------------------------------------------------------------
## Profile API

Takes POST requests for updating mySQL database with user information. The mySQL database needs to be up and running, so first create an account. On lines 5-10 of /ProfileAPI/API/index.py, update the credentials to match your values. From there, feel free to run this API using the steps stated below. The API takes the following arguments: 'username', 'fullname', 'dob', 'pronouns', 'email', 'abt'. The api can be accessed with the link for the deployment followed by the endpoint: '/adduser'. 

How to modify mySQL database with custom table:

```bash
mysql -u root -p [YOURDATABSENAME] < [SCHEMA].sql      
```

Deployment:

```bash
cd ProfileAPI
pipenv --three
./boothstrap.sh
```

Guide for mySQL: https://dev.mysql.com/doc/mysql-getting-started/en/
Guide for Flask API: https://auth0.com/blog/developing-restful-apis-with-python-and-flask/ 

----------------------------------------------------------------------------------------------------------------------------------------
## Friend API

Deployment follows that of ProfileAPI. The POST requests only take two arguements: 'username' and 'username_friend'. The api can be accessed with the link for the deployment followed by the endpoint: '/addfriends'. 

Deployment:

```bash
cd FriendAPI
pipenv --three
./boothstrap.sh
```

----------------------------------------------------------------------------------------------------------------------------------------
## Chat API

ChatAPI abilities: API is capable of sending and viewing messages between two users. The POST calls are used to post messages with sender and recipient specified, while the id used to store messages common senders and recipients are created by combining the name of the sender and recipient and alphabetizing the combination. The GET calls require specification of 'sender' and 'recipient' in order to get a collection of all messages sent between the users.

To send a message the following parameters need to be specified: sender_name, recipient_name, message

To view messages between two users the following parameters need to be specified: sender_name, recipient_name

ChatAPI use instrucitons:

To deploy API, run the following commands:

```bash
cd ChatAPI
pip install pipenv
pipenv --three
pipenv install pymongo
pipenv install "pymongo[srv]"
pipenv install flask
./bootstrap.sh
```

To make sure messages are being stored properly, run:

```bash
brew services start mongodb-community
```

----------------------------------------------------------------------------------------------------------------------------------------
## The Front End

Currently there are the following screens, and source codes:

- Home Screen: /SpotsBeta/src/screens/HomeScreen.js
- Registration Screen: /SpotsBeta/src/screens/RegistrationScreen.js
- Login Screen: /SpotsBeta/src/screens/LoginScreen.js
- MainMenuScreen: /SpotsBeta/src/screens/MainMenuScreen.js
- Profile Screen: /SpotsBeta/src/screens/ProfileScreen.js
- Add Friends Screen: /SpotsBeta/src/screens/AddFriendsScreen.js
- Chat Screen: /SpotsBeta/src/screens/ChatScreen.js
- Map Screen: /SpotsBeta/src/screens/MapScreen.js

To deploy the front end:

```bash
cd SpotsBeta
npx react-native start
```

On a different terminal run:

```bash
cd SpotsBeta
npx react-native run-ios
```

To adjust the API running profile API:
- /SpotsBeta/src/screens/ProfileScreen.js alter the link on line 115 with where the deployed API is running (See deployment steps above)

To adjust the API running Friends API:
- /SpotsBeta/src/screens/AddFriendsScreen.js alter the link on line 34

To adjust the API running Chat API:
- /SpotsBeta/src/screens/ChatScreen.js alter the link on line 40

----------------------------------------------------------------------------------------------------------------------------------------

### Accomplishments of the current state of the project

- Provided front end interface to be able to update database with new users, and associate users with friends. 
- Deployed APIs and frontend and database, and connected the three
- Provided map interface
- Displayed ability to only add friends when users exist with the use of foreign keys
- Displayed modular API coding ability with the deployment of APIs on seperate links, yet interfacing with the same front-end
- React-native front end coding
- Flask API backend coding
- MongoDB coding (document based database) (for chat funtionality)
- mySQL coding (relational database) (for users and friends)

### Disclaimers

- The current state of the MAP API is only to render a map, and users cannot pin locations on it yet, the point of this project was to add the map interface to be able to alter down the line with newly developed modular APIs.

- There is currently no authentication API, but the screens have already been developed for doing so, and an authentication API can be added down the line

- Currently loging information is not required to be able to access the screens that test each of the APIs provided in this project