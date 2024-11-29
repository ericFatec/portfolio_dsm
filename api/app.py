from flask import Flask, render_template
import os
import sqlite3

app = Flask(__name__)

def get_project_by_id(project_id):
    db_path = os.path.join(os.path.dirname(__file__), 'projects.db')
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute('SELECT * FROM projetos WHERE id = ?', (project_id,))
    row = cursor.fetchone()
    
    if row:
        project = dict(row)
        project['tecnologias'] = project['tecnologias'].split(', ')
        cursor.execute('''
            SELECT desenvolvedores.* 
            FROM desenvolvedores 
            INNER JOIN project_devs ON desenvolvedores.id = project_devs.desenvolvedor_id 
            WHERE project_devs.projeto_id = ?
        ''', (project_id,))
        developer_rows = cursor.fetchall()
        developers = [dict(developer_row) for developer_row in developer_rows]
        project['developers'] = developers
    else:
        project = None

    conn.close()
    return project

@app.route("/")
def home():
    return render_template('index.html', current_page='home')

@app.route("/formacao")
def contact():
    return render_template('formacao.html', current_page='formacao')

@app.route("/projects")
def projects():
    greentech=get_project_by_id('GT')
    portfolio=get_project_by_id('PF')
    assistenteml=get_project_by_id('ML')
    prostock=get_project_by_id('PS')
    return render_template('projects.html', current_page='projects', gt=greentech, pf=portfolio, ml=assistenteml, ps=prostock)

if __name__ == "__main__":
    app.run()