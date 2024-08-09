# firebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import messaging

import datetime
import json
# flask
from flask import Flask, render_template, jsonify, request, url_for, redirect, session, Blueprint
from flask_cors import CORS
import secrets
# 資料庫
import mariadb
import sys

from geopy.distance import geodesic

# 建立實體
notify = Blueprint('notify', __name__, template_folder='..\\Profile\\Home\\Report')
CORS(notify) # 跨平台使用

notify.secret_key = secrets.token_hex(16) # 保護session

# 存取使用者位置資訊及警示中心資訊
user_locations = {} # {user_id: (latitude, longitude)}
user_tokens = {} # {user_id: token }
last_sent_time = {} # {user_id: last_time }
# alert_centers = [] # # [(alert_id, latitude, longitude)]

# 推送設置
cred = credentials.Certificate("./Graduation-Project-App/flask_server/google.json")
default_app = firebase_admin.initialize_app(credential=cred)

def send_messages(lat, lon, radius):
    current_time = datetime.datetime.now()
    for user_id, user_coords in user_locations.items():
        if user_id in last_sent_time:
            last_time = last_sent_time[user_id]
        else:
            last_time = datetime.datetime.min
        times = current_time - last_time
        if times > datetime.timedelta(seconds=600):
            alert_coords = (lat, lon)
            distance = geodesic(alert_coords, user_coords).kilometers
            if distance <= radius:
                messages = [
                    messaging.Message(
                        notification=messaging.Notification(
                            title="附近有猴猴出沒",
                            body="請將食物、塑膠袋、紙袋收好\n不要直視獼猴的眼睛，將背包置於胸前\n請勿餵食野生動物",
                            image="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2023/03/23/realtime/20786797.jpg&s=Y&x=54&y=0&sw=1439&sh=959&exp=3600&w=800",
                        ),
                        data={
                            "test": "great match!",
                        },
                        token = user_tokens[user_id],
                    ),
                ]
                response = messaging.send_all(messages)
                print("{0} messages were sent successfully".format(response.success_count))
                # 更新上次發送訊息的時間
                last_sent_time[user_id] = current_time
        else:
            print(f"Please wait {600 - times.seconds} seconds before sending the next batch of messages.")

@notify.route('/tokenSubmit', methods=["GET", "POST"])
def get_user_token():
    if request.method == "POST":
        # 取表單資料
        data = request.get_json()
        email = data.get('email')
        token = data.get('token')
        
        # 連接資料庫
        try:
            conn = mariadb.connect(
                user="root", 
                password="mis114monkey", 
                host="127.0.0.1", 
                port=3307, 
                database="mis114_monkey" 
            )
        except mariadb.Error as e:
            print(f"Error connecting to MariaDB Platform: {e}")
            sys.exit(1)
        
        # 讀取資料庫資料
        cur = conn.cursor()
        cur.execute("SELECT PID FROM user WHERE Email=? LIMIT 1", (email,))
        rows = cur.fetchall()
        if rows:
            for row in rows:
                pid = row[0]
            user_tokens[pid] = token
            session['state'] = "success"
        else:
            print("no pid")
            session['state'] = "wrong"
            return redirect(url_for("notify.get_user_token"))
        conn.close()
        return redirect(url_for("notify.get_user_token")) # 網頁重新導向，避免重複提交資料
    # 讀取session資料
    state = session.get('state', "wrong")
    session.clear() # 將session裡的資料清除
    return jsonify({"state": state})

@notify.route('/locationSubmit', methods=["GET", "POST"])
def update_user_location():
    if request.method == "POST":
        # 取表單資料
        data = request.get_json()
        email = data.get('email')
        lat = data.get('latitude')
        lon = data.get('longitude')
        
        # 連接資料庫
        try:
            conn = mariadb.connect(
                user="root", 
                password="mis114monkey", 
                host="127.0.0.1", 
                port=3307, 
                database="mis114_monkey" 
            )
        except mariadb.Error as e:
            print(f"Error connecting to MariaDB Platform: {e}")
            sys.exit(1)
        
        # 讀取資料庫資料
        cur = conn.cursor()
        cur.execute("SELECT PID FROM user WHERE Email=? LIMIT 1", (email,))
        rows = cur.fetchall()
        if rows:
            for row in rows:
                pid = row[0]
            user_locations[pid] = (lat, lon)
            session['state'] = "success"
        else: 
            print("no pid")
            session['state'] = "wrong"
            return redirect(url_for("notify.update_user_location"))
        conn.close()

        return redirect(url_for("notify.update_user_location")) # 網頁重新導向，避免重複提交資料
    # 讀取session資料
    state = session.get('state', "wrong")
    session.clear() # 將session裡的資料清除
  
    return jsonify({"state": state})

