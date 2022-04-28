import mysql.connector
import time 
import datetime

ts=time.time()
timestamp = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')

#this portion is to test uploading a user to a database

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="PASSWORD", #for the purposes of github, I will not include this in the commit 
  database="SpotsUsers"
)

# mycursor = mydb.cursor()

# sql = "INSERT INTO users (username, fullname, dob, pronouns, email, abt, datejoined) VALUES (%s, %s, %s, %s, %s, %s, %s)"
# val = ("johndoe101", "John", "January 2nd, 1998", "he/him", "john@doe.com", "likes pies", timestamp)
# mycursor.execute(sql, val)

# mydb.commit()

# print(mycursor.rowcount, "record inserted.")

# mycursor = mydb.cursor()

# sql = "INSERT INTO users (username, fullname, dob, pronouns, email, abt, datejoined) VALUES (%s, %s, %s, %s, %s, %s, %s)"
# val = ("naaafis", "Abeer", "January 20, 2000", "he/him", "nafis@doe.com", "likes pasta", timestamp)
# mycursor.execute(sql, val)

# mydb.commit()

# print(mycursor.rowcount, "record inserted.")


mycursor = mydb.cursor()

sql = "INSERT INTO user_friend (username, username_friend) VALUES (%s, %s)"
val = ("johndoe101", "naaafis")
mycursor.execute(sql, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")