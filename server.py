from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
import math
import random
app = Flask(__name__)


A = ["This year","After so much time and effore","In the next few months","Finally,","Eventually,", "Unfortunately", "Sooner or later", "Ultimately", "One day", "Hopefully" ]
B = ["the Congress","the President of the United States","the Supreme Court","Eric Addams","the Governor", "the U.S Senate","the U.N", "Elon Musk", "the World Health Organization"]
C = ["will announce on elections","will declare their abortion policy","will pass legislation to limit the press","said they will upgrade homeless shelters","is going to take control over NASA","is not focused on sustainability", "will get involved with Russia-Ukraine confilct", "will support local businesses", "will abolish the mask mandate", "is goint to buy only American-made products"]

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

@app.route('/add')
def add():
    global A
    global B
    global C

    return render_template('add.html',a = A,b = B,c = C )   



# AJAX FUNCTIONS

# ajax for people.js
@app.route('/add', methods=['GET', 'POST'])
def add_clause():
    global A 
    global B
    global C 

    json_data = request.get_json()  
    
    # add new entries to repective arrays with 
    if "A" in json_data.keys(): 
        a = json_data["A"] 
        A.append(a)
    
    if "B" in json_data.keys(): 
        b = json_data["B"]
        B.append(b)
    
    if "C" in json_data.keys(): 
        c = json_data["C"]
        C.append(c)

    data = [A,B,C]
    #send back the WHOLE array of data, so the client can redisplay it
    return jsonify(data = data)





# ajax for people.js
@app.route('/add_A', methods=['GET', 'POST'])
def add_clauseA():
    global A 
    global B
    global C 

    json_data = request.get_json()  
    # add new entries to repective arrays with 
    if "A" in json_data.keys(): 
        a = json_data["A"] 
        A.append(a)
        #print("its: ", A)
    

    data = [A,B,C]
    #send back the WHOLE array of data, so the client can redisplay it
    return jsonify(data = data)



@app.route('/add_B', methods=['GET', 'POST'])
def add_clauseB():
    global A 
    global B
    global C 

    json_data = request.get_json()  
    # add new entries to repective arrays with 
    if "B" in json_data.keys(): 
        b = json_data["B"] 
        B.append(b)
        print("its: ", B)
    

    data = [A,B,C]
    #send back the WHOLE array of data, so the client can redisplay it
    return jsonify(data = data)



@app.route('/add_C', methods=['GET', 'POST'])
def add_clauseC():
    global A 
    global B
    global C 

    json_data = request.get_json()  
    # add new entries to repective arrays with 
    if "C" in json_data.keys(): 
        c = json_data["C"] 
        C.append(c)
        print("its: ", C)
    

    data = [A,B,C]
    #send back the WHOLE array of data, so the client can redisplay it
    return jsonify(data = data)
 


if __name__ == '__main__':
   app.run(debug = True)




