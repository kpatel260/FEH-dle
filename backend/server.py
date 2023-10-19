from flask import Flask
from flask import jsonify
from flaskext.mysql import MySQL
import datetime
import json

x = datetime.datetime.now()
db = MySQL()

app = Flask(__name__)

with open('cred.txt') as f:
    data = f.read()

creds = json.loads(data)

app.config['MYSQL_DATABASE_USER'] = creds['DB_USER']
app.config['MYSQL_DATABASE_PASSWORD'] = creds['DB_PASS']
app.config['MYSQL_DATABASE_DB'] = creds['DB_TABLE']
app.config['MYSQL_DATABASE_HOST'] = creds['DB_HOST']
db.init_app(app)

conn = db.connect()

@app.route('/<string:name>')
def retrieve_char_data(name):
    cursor = conn.cursor()
    query = "SELECT * FROM characters WHERE name=\'%s\'" % name
    cursor.execute(query)
    data = cursor.fetchone()
    response = jsonify({
        'Gender': data[1],
        'Group': data[2],
        'Home': data[3],
        'Movement': data[4],
        'Weapon': data[5],
        'Crest': data[6],
        
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/test')
def sample_response():
    response = jsonify(
    {
        'Gender':'Male',
        'Group':'Blue Lions',
        'Home': 'Faerghus',
        'Movement': 'Infantry',
        'Weapon': 'Lance',
        'Crest': 'Blaiddyd'
    }
    )
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':
    app.run(debug=True)

