from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
import math
import random
app = Flask(__name__)


A = ["Noam who is tall", "Yinon who is tired", "Ray who is great", "Dennis who is wonderful"]
B = ["Got into trouble because of staeling a sandwich", "Wrote a lovely poem", "Ran over an old lady", "Took Ray out for a walk"]
C = ["It ended in jail-time", "This secret looms over his head untill this day", "And they lived happily ever after"]

# ROUTES

def chooseClauses(A,B,C):
    a = A[math.floor(random.uniform(0, 1) * 4)]
    b = B[math.floor(random.uniform(0, 1) * 3)]
    c = C[math.floor(random.uniform(0, 1) * 3)]
    return a,b,c
    

@app.route('/')
def home():
    global A
    global B
    global C

    return render_template('home.html',a = A,b = B,c = C )   



@app.route('/people')
def people(name=None):
    return render_template('people.html', data=data)  


# AJAX FUNCTIONS

# ajax for people.js
@app.route('/add_clause', methods=['GET', 'POST'])
def add_name():
    global data 
    global current_id 

    json_data = request.get_json()   
    name = json_data["name"] 
    
    # add new entry to array with 
    # a new id and the name the user sent in JSON
    current_id += 1
    new_id = current_id 
    new_name_entry = {
        "name": name,
        "id":  current_id
    }
    data.append(new_name_entry)

    #send back the WHOLE array of data, so the client can redisplay it
    return jsonify(data = data)
 


if __name__ == '__main__':
   app.run(debug = True)




