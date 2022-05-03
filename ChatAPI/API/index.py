import json
from bson import json_util
import pymongo
from pymongo import MongoClient #Needed for compatibility with MongoDB
# pprint library is used to make the output look more pretty
from pprint import pprint
import datetime

from flask import Flask, jsonify, request
app = Flask(__name__)

########################################################################
#connect to mongo client 
client = MongoClient("mongodb+srv://cheffb:mongodbuser@cluster0.4uqdj.mongodb.net")
#currently the client link refers to localhost mongodb
db = client["chat"]
col = db["messages"]

########################################################################

# message_collection = [
    
#     {'sender': 'sender_name', 'recipient': 'recipient_name', 'message': 'message_body'}
    
# ]

def check_message(inp): 
    #this function just makes sure that the body of a message is is a string
    recipient_name = inp['recipient']
    sender_name = inp['sender']
    message = inp['message']
    
    if not isinstance(recipient_name, str):
        #tell user to enter valid id for recipient
        return "Please provide a string for the name of the recipient"
    
    if not isinstance(sender_name, str):
        #tell user to enter valid id for recipient
        return "Please provide a string for the name of the sender"
    
    if not isinstance(message, str):
        #tell user to reenter a valid message type
        return "Please provide string for the message body"
    
    return "Valid Message"

def check_users(inp): #this function just makes sure usernames are in the correct format
    recipient_name = inp['recipient']
    sender_name = inp['sender']
    
    if not isinstance(recipient_name, str):
        #tell user to enter valid id for recipient
        return "Please provide a string for the name of the recipient"
    
    if not isinstance(sender_name, str):
        #tell user to enter valid id for recipient
        return "Please provide a string for the name of the sender"
    
    return "Valid Message"

@app.route("/messages", methods=["GET"])
def get_all_messages():
    users = request.get_json()
    if check_users(users) == "Valid Message":
        users_id = ''.join(sorted(users['sender']+users['recipient']))
        result = col.find({"users": users_id})
        result = json.loads(json_util.dumps(result))
        #return jsonify(message_collection)
        return jsonify(result)
    else: 
        return check_users(users)

@app.route("/messages", methods=['POST'])
def add_device():
    new_message = request.get_json()
    if check_message(new_message) == "Valid Message":
        #message_collection.append(request.get_json())
        datetime_object = datetime.datetime.now()
        inserting_m = {'users': ''.join(sorted(new_message['sender']+new_message['recipient'])), 'sender': new_message['sender'], 'recipient': new_message['recipient'], 'message': new_message['message'], 'timestamp': datetime_object}
        result = col.insert_one(inserting_m)
        print('Created {0}'.format(result.inserted_id))
        return check_message(new_message)
    else: 
        return check_message(new_message)