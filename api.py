from flask import Flask, jsonify

#init api
app = Flask(__name__)

#route
app.route('/')
def index():
    return "Hola NNLAJ"

if __name__ == '__main__':
    app.run(debug=True)