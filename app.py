from flask import Flask, render_template, redirect, abort

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('index.html')

@app.route("/instrucciones")
def instrucciones():
    return render_template('instrucciones.html')

@app.route("/game")
def game():
    return render_template('juego.html')
