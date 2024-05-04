from flask import Flask, render_template

app = Flask("__name__")

@app.route("/")
def home():
    return render_template('index.html', current_page='home')

@app.route("/contato")
def contact():
    return render_template('contato.html', current_page='contato')

@app.route("/projects")
def projects():
    return render_template('projects.html', current_page='projects')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True, threaded=True)