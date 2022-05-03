import mysql.connector

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
  
  incoming_json = request.get_json()
  
  username = incoming_json['username']
  username_friend = incoming_json['username_friend']

  mycursor = mydb.cursor()

  sql = "INSERT INTO user_friend (username, username_friend) VALUES (%s, %s)"
  val = (username, username_friend)
  mycursor.execute(sql, val)

  mydb.commit()

  print(mycursor.rowcount, "record inserted.")
  
  return jsonify({"message": "Friend added"})
  