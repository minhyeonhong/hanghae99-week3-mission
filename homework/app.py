from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://minhyeonhong:m1245415@cluster0.1xfvvjw.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/homework", methods=["POST"])
def homework_post():
    name = request.form['name_give']
    comment = request.form['comment_give']
    doc = {'name': name, 'comment': comment}
    db.homework.insert_one(doc)

    return jsonify({'msg':'응원 완료!'})

@app.route("/homework", methods=["GET"])
def homework_get():
    homework_list = list(db.homework.find({}, {'_id': False}))

    return jsonify({'homework_list': homework_list})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)