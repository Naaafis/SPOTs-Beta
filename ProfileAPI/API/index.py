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


@app.route("/adduser", methods= ['POST'])
def adduser():
  ts=time.time()
  timestamp = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
  
  incoming_json = request.get_json()
  username = incoming_json['username']
  fullname = incoming_json['fullname']
  dob = incoming_json['dob']
  pronouns = incoming_json['pronouns']
  email = incoming_json['email']
  abt = incoming_json['abt']
  datejoined = timestamp
  
  mycursor = mydb.cursor()

  sql = "INSERT INTO users (username, fullname, dob, pronouns, email, abt, datejoined) VALUES (%s, %s, %s, %s, %s, %s, %s)"
  val = (username, fullname, dob, pronouns, email, abt, datejoined)
  mycursor.execute(sql, val)

  mydb.commit()

  print(mycursor.rowcount, "record inserted.")
  
  return "User added"
