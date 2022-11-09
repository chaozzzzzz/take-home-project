# take-home-project

# introduction
List page
http://localhost:3000/api/members
<img src="https://user-images.githubusercontent.com/98049062/200943253-89025250-905e-47e3-84ec-baab38622e06.png">
Add page
http://localhost:3000/api/members/add
<img src="https://user-images.githubusercontent.com/98049062/200943314-d2d07707-3885-49da-9f47-620236e258f8.png">
Edit page
http://localhost:3000/api/members/member_id
<img src="https://user-images.githubusercontent.com/98049062/200943336-5cfe22a6-1654-4e68-ae50-b05c17e3409b.png">
# client
1. in terminal:


    npm install
2. create .env file


    REACT_APP_BASE_URL=http://localhost:3000
    REACT_APP_API_BASE_URL=http://127.0.0.1:8000
3. in terminal:


    npm start
# server
1. in terminal: 


    pip install -r requirements.txt
2. config sql database name, username, password in app/settings
3. in terminal:


    python3 manage.py runserver
