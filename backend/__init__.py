from flask import Flask, request , jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
import logging

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///form_data.db'
db = SQLAlchemy(app)

# Set up logging
logging.basicConfig(level=logging.DEBUG)


class FormData(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    lastname = db.Column(db.String(120), nullable=False)
    service = db.Column(db.String(120), nullable=False)
    phonenumber = db.Column(db.String(120), nullable=False)

    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'name': self.name,
            'lastname': self.lastname,
            'service': self.service,
            'phonenumber': self.phonenumber
        }


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    password = db.Column(db.String(128))


with app.app_context():
    db.create_all()

@app.route('/get-form-data', methods=['GET'])
def get_form_data():
    # Query the database for all entries in the FormData table
    all_data = FormData.query.all()
    # Convert the data to a list of dictionaries
    data_list = [item.to_dict() for item in all_data]
    # Return the data as JSON
    return jsonify(data_list)

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.json
    form_data = FormData(email=data['email'], name=data['name'], lastname=data['lastname'],
                         service=data['service'], phonenumber=data['phonenumber'])
    db.session.add(form_data)
    db.session.commit()
    return 'Form data received and stored in the database'


@app.route('/adminlogin', methods=['POST'])
def adminlogin():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Check if the username and password match the expected values
    if username == "SAM" and password == "ONE":
        return 'Admin login successful'
    else:
        return 'Invalid username or password', 401


if __name__ == '__main__':
    app.run(debug=True)
