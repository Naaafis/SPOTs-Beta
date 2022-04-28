import mysql.connector
import time 
import datetime


mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="PASSWORD", #for the purposes of github, I will not include this in the commit 
  database="SpotsUsers"
)


from flask import Flask, request, jsonify
app = Flask(__name__)


@app.route("/addfriends", methods= ['POST'])
def addfriends():
  
  ts=time.time()
  timestamp = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
  
  incoming_json = request.get_json()
  
  username = incoming_json['username']
  username_friend = incoming_json['username_friend']

  mycursor = mydb.cursor()

  sql = "INSERT INTO user_friend (username, username_friend) VALUES (%s, %s)"
  val = ("johndoe101", "naaafis")
  mycursor.execute(sql, val)

  mydb.commit()

  print(mycursor.rowcount, "record inserted.")
  
  return "Friend added"
  
  