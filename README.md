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

Takes POST requests for updating mySQL database with user information. The mySQL database needs to be up and running, so first create an account. On lines 5-10 of /ProfileAPI/API/index.py, update the credentials to match your values. From there, feel free to run this API using the steps stated below. 

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

Deployment follows that of ProfileAPI. 

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

Currently there are screens for... 
